/*
 * @作者: Edwin Yeung
 * @Date: 2020-03-23 19:14:12
 * @修改人: Edwin Yeung
 * @LastEditTime: 2020-03-23 20:57:14
 * @描述: 格式化日期和时间,20202.2.27摘自网络: https://www.jianshu.com/p/3dd38d6eac5f 
 */

/* 
 * 先引用: 在 main.js 中  import '@/utils/dateFormat.js'   
 * 使用方法: new Date().Format("yyyy/MM/dd HH:mm:ss") 
 */


//获取星期几
Date.prototype.getDayName = function() {
  var format = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  return format[this.getDay()];
};

Date.prototype.Format = function (pattern) {
  /*初始化返回值字符串*/
  var returnValue = pattern;

  // 荣加入  on 20203.3.23
  var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

  /*正则式pattern类型对象定义*/
  var format = {
    "y+": this.getFullYear(),
    "m+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "M+": this.getMinutes(),
    "s+": this.getSeconds(),
    "S+": this.getMilliseconds(),
    "H+": (this.getHours() % 12),
    "A": (this.getHours() / 12) <= 1 ? "AM" : "PM",
    "D": week[this.getDay()]
  }
  /*遍历正则式pattern类型对象构建returnValue对象*/
  for (var key in format) {
    var regExp = new RegExp("(" + key + ")");
    if (regExp.test(returnValue)) {
      var zero = "";
      for (var i = 0; i < RegExp.$1.length; i++) { zero += "0"; }
      var replacement = RegExp.$1.length == 1 ? format[key] : (zero + format[key]).substring((("" + format[key]).length));
      returnValue = returnValue.replace(RegExp.$1, replacement);
    }
  }
  return returnValue;
}

