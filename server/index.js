/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-15 12:01:36
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-05-13 17:19:29
 * @描述: 
 */

// node 后端服务器
const express = require('express');
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();

// 跨域问题(好像不起作用)
app.use(require('cors')())

//原来设置
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// 后端api路由
app.use('/api', userApi);


// 监听端口
// app.listen(3000,'0.0.0.0');
app.listen(3000);

console.log('\n成功监听端口:3000......\n');
