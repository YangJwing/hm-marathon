/*
 * @作者: Edwin Yeung
 * @Date: 2021-05-08 22:57:17
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-05-08 22:57:39
 * @描述: 
 */
const mysql = require('mysql')
const config = require('./db')
const pool = mysql.createPool(config)
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query