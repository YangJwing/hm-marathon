/*
 * @作者: Edwin Yeung
 * @Date: 2021-05-08 22:45:55
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-04 17:22:46
 * @描述: 
 */
//参考出处  https://blog.csdn.net/weixin_42003850/article/details/100511566   on 2020/02/18

//userApi.js
const express = require('express')
const router = express.Router()

const models = require('../db')
const mysql = require('mysql')
const $sql = require('../sqlMap')


// 加密和 token
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = 'jwing_13712796608'


// 连接数据库
const query = require('../init')

// 中间件 **********************************************************************
let auth = async (req, res, next) => {
  try {
    const token = String(req.headers.authorization || " ").split(' ').pop()
    if (!token) {
      res.status(401).send("token不能为空")
      return
    }
    // 下面的console不能输出，否则下面的不执行
    // console.log('jwt.verify(token, SECRET) :>> ', jwt.verify(token, SECRET));
    let raw = jwt.verify(token, SECRET, (err, decoded) => {
      // console.log('出现的err :>> ', err);
      if (err) {
        if (err.name == 'TokenExpiredError') {//token过期
          let str = {
            iat: 1,
            exp: 0,
            msg: 'token过期'
          }
          return str;
        } else if (err.name == 'JsonWebTokenError') {//无效的token
          let str = {
            iat: 1,
            exp: 0,
            msg: '无效的token'
          }
          return str;
        }
      } else {
        // console.log('decoded :>> ', decoded);
        return decoded;
      }
    })
    // console.log('raw:>>', raw);
    if (raw.iat < raw.exp) {    //开始时间小于结束时间，代表token还有效
      const { id } = raw        //token解码后是否存在id，此id在生成token时已定义好
      if (!id) {
        res.status(401).send("token无效")
        return
      }
      req.user = await query(`SELECT * FROM user WHERE id = ?`, [id])  //通过id在用户数据库查找是否有改用户，然后将请求的结果挂载到req上
      if (!req.user) {
        res.status(401).send("该用户不存在")
        return
      }
      await next()
    } else {
      res.status(401).send(raw.msg)
      return
    }

  } catch (err) {
    throw new Error(err)
  }

}
// ******************************************************************************

// 注册
router.post('/register', async (req, res) => {
  const data = req.body
  const mobile = data.mobile
  const name = data.name
  const password = require('bcrypt').hashSync(data.password, 10)
  // console.log('密码 :>> ', password);
  const result = await query(`insert into user(mobile,name,password) values(?,?,?)`, [mobile, name, password])
  res.status(200).send({ mobile: mobile, name: name, message: "用户注册成功！" })
})

// 登录
router.post('/login', async (req, res, next) => {
  try {
    // console.log('登录req.body:', req.body)
    const data = req.body
    const mobile = data.mobile
    const password = data.password
    const result = await query(`SELECT * FROM v_user WHERE mobile = ?`, [mobile])
    if (result.length === 0) {
      res.json({ code: 500, message: '用户名不存在' })
    } else if (!require('bcrypt').compareSync(password, result[0].password)) {
      res.json({ code: 500, message: '密码不正确' })
    } else {
      // console.log('登录result[0].id) :>> ', result[0].id);
      const token = jwt.sign({ id: String(result[0].id) }, SECRET, { expiresIn: '7d' }) // 有效期7天
      res.json({ code: 200, user: result[0], message: '登陆成功', token })
    }
  } catch (err) {
    throw new Error(err)
  }
})
//登录日志
router.post('/log', auth, async (req, res, next) => {
  try {
    const data = req.body
    const name = data.name
    const type = data.type
    const keyword = data.keyword
    const price = data.price
    const classid = data.classid
    // console.log('log用户名 :>> ', name);
    const result = await query(`insert into log(name,type,keyword,classid,price) 
                                values(?,?,?,?,? )`, [name, type, keyword, classid, price])
  } catch (err) {
    throw new Error(err)
  }
})

//关于我，临时测试
router.post('/aboutme', auth, async (req, res) => {
  try {
    const data = req.user[0]
    // console.log('aboutme req.user :>> ', req.user);
    const id = data.id
    // console.log('aboutme id :>> ', id);
    const result = await query(`select * from user where id = ? `, [id])
    if (result.length === 0) {
      // console.log(' aboutme 失败 :>> ');
    } else {
      // console.log('aboutme 成功 :>> ', req.user[0].name);
      // 解构ID，从auth里获得用户信息，此处为 name 
      res.json({ name: req.user[0].name })
    }
  } catch (err) {
    throw new Error(err)
  }
})

// 改密码
router.post('/updPassword', async (req, res) => {
  try {
    const data = req.body
    // console.log('upd req.body :>> ', req.body);
    const mobile = data.mobile
    // console.log('upd mobile :>> ', mobile);
    const password = data.password
    // console.log('upd password :>> ', password);
    const result = await query(`update user set password= ? 
                where mobile = ? `, [require('bcrypt').hashSync(password, 10), mobile])
    res.json({ message: '改密成功' })

  } catch (err) {
    throw new Error(err)
  }

})

// 获取红酒库存
router.get('/getstock', auth, async (req, res) => {
  try {
    const data = req.query
    const key1 = data.key1
    const key2 = '%' + data.key2 + '%'
    const p1 = data.price1
    const p2 = data.price2
    const classid = data.classid
    const stockOprator = data.stockOprator
    const page = data.page
    const size = data.size
    // classid = (classid == '-2' ? '%' : classid)
    // console.log("page:",page)
    // 直接从视图查找
    let sql = "select SQL_CALC_FOUND_ROWS * from v_wine_stock where stock_qty " + stockOprator + " and sale_price between ? and ? and classid like ? and concat(item_name,IFNULL(alias,'')) like concat('%',?,'%')  and concat(item_name,IFNULL(alias,'')) like ?  order by item_name limit " + (page - 1) * size + ',' + size + ";"
    sql = sql + "select FOUND_ROWS() AS total;"
    const result = await query(sql, [p1, p2, classid, key1, key2])
    // const result = await query(`select * from v_wine_stock 
    //   where stock_qty > 0  
    //   and sale_price between ? and ?  
    //   and classid like ?
    //   and concat(item_name,IFNULL(alias,'')) like concat('%',?,'%') 
    //   and concat(item_name,IFNULL(alias,'')) like ? 
    //   order by sale_price `,[p1, p2,classid, key1, key2])
    if (result[0].length === 0) {
      res.json({ code: 0, message: '搜索结果为空', total: 0 }) 
    } else {
      // console.log('total :>> ', result[1][0].total);
      res.json({ code: 200, wineStock: result[0], total: result[1][0].total })
    }
  } catch (err) {
    throw new Error(err)
  }
})

// 获取商品的类型
router.get('/getclass', async (req, res) => {
  try {
    // const data = req.query
    // let classid = data.classid
    // classid = (classid == '-2' ? '%' : classid)
    // const result = await query(`select * from yh_ba_class_info 
    //     where classlevel=3 and    
    //     classid like ? `, [classid])

    // 类别为3级的才显示
    const result = await query(`select classid,classname from yh_ba_class_info where classlevel=3`)
    if (result.length === 0) {
      res.json({ code: 0, message: '搜索结果为空', count: 0 })
    } else {
      res.json({ code: 200, data: result, count: result.length })
    }
  } catch (err) {
    throw new Error(err)
  }
})

// 获取热门搜索关键词
router.get('/getHotKeyword', async (req, res) => {
  try {
    const data = req.query
    const result = await query(`select keyword from v_hot_keyword`)
    if (result.length === 0) {
      res.json({ code: 0, message: '热门词条为空' })
    } else {
      console.log('result :>> ', result);
      res.json({ code: 200, data: result})
    }
  } catch (err) {
    throw new Error(err)
  }
})
// 根据no长度获取商品的类型  * 测试用*
router.get('/getclassbyno', async (req, res) => {
  try {
    const data = req.query
    const classno = data.classno
    const classname = data.classname
    // console.log('classno,classname :>> ', classno, classname);
    // const result = await query(`select * from yh_ba_class_info `)
    const result = await query(`select * from yh_ba_class_info where length(classno) = ? and char_length(classname)= ?`, [classno, classname])
    if (result.length === 0) {
      res.json({ code: 0, message: '搜索结果为空', count: 0 })
    } else {
      res.json({ code: 200, data: result, count: result.length })
    }
  } catch (err) {
    throw new Error(err)
  }
})


module.exports = router
