/*
 * @作者: Edwin Yeung
 * @Date: 2020-02-18 14:32:54
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-05-24 13:42:48
 * @描述: 
 */
//参考出处  https://blog.csdn.net/weixin_42003850/article/details/100511566   on 2020/02/18

//sqlMap.js
var sqlMap = {

  //登录/注册
  login_log: {
    loginlog: 'insert into login_log(name,mobile,state) values( ?, ?, ?)',   //记录登录日志
  },

  // 用户表
  user: {
    // logincheck: 'select * from user where mobile = ? and password = ?',  //密码校验
    logincheck: 'select * from user where mobile = ? ',  //密码校验
    register: 'insert into user(name,sex,mobile,password) values( ?,?,?,? )',
    checkmobile: 'select * from user where mobile = ?',        //检查手机号已存在数据中
    edit: 'update user set name = ? , sex = ? where name=?',  //更新用户数据
    search: 'select * from user where name like ?',           //查找用户信息
    delete: 'delete  from user where name = ?',
  },
  orders: {
    //https://blog.csdn.net/weixin_38229356/article/details/82891540
    //MySql实现无则插入有则更新的解决方案
    //数据首先要进行如下操作 ALTER TABLE db_abc ADD UNIQUE (userid,orderdate);
    adddine: 'replace into orders(userid,name,orderdate,breakfast,lunch,dinner) values(?,?,?,?,?,?)',
    myorders: 'select orderdate,breakfast,lunch,dinner from orders where userid = ? order by orderdate desc',
    ordercount: 'select sum(breakfast) breakfast,sum(lunch) lunch, sum(dinner) dinner from orders where orderdate= ? ',
    orderdetails_b: 'select name from orders where breakfast=1 and orderdate = ? order by CONVERT(name USING gbk) ',
    orderdetails_l: 'select name from orders where lunch=1 and orderdate = ? order by CONVERT(name USING gbk) ',
    orderdetails_d: 'select name from orders where dinner=1 and orderdate = ? order by CONVERT(name USING gbk) ',
  },
  //建议表
  suggestion: {
    addsuggestion: 'insert into suggestion(userid,type,description) values( ?, ?, ?)',   //记录建议
  },
  //公告表
  notice: {
    addnotice: 'insert into notice(name,mobile,state) values( ?, ?, ?)',   //插入公告
    shownotice: 'select content from notice order by create_time desc limit 1',   //查询最新的公告
  },

}

module.exports = sqlMap;
