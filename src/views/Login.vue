<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-17 21:49:53
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-05 15:17:25
 * @描述: 
 -->

<template>
  <div class="login">
    <!-- 中国电信LOGO -->
    <!-- <van-image  :src="require('@/assets/img/china-telecom.jpg')" /> -->
    <h3 style="margin: 30px 20px 20px 20px; text-align: center">密码登录</h3>
    <van-form @submit="onSubmit">
      <van-field
        ref="loginfield"
        v-model="mobile"
        type="tel"
        name="mobile"
        label-align="left"
        label="用户名"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '手机号必填*' }]"
        left-icon="user-o"
        border
      />

      <van-field
        v-model="password"
        type="password"
        name="password"
        label-align="left"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '密码必须*' }]"
        left-icon="closed-eye"
        border
      />
      <div style="margin: 16px">
        <van-button round block type="info" natve-type="submit"
          >提交</van-button
        >
      </div>

      <div class="login-register">
        <span @click="register">注册</span>
        <span @click="logout">注销</span>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      mobile: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log("register click");
      this.$router.push("/register");
    },
    //提交密码校验 (values为form表单submit的回调参数)
    onSubmit(values) {
      let loginData = values;
      this.$http
        .post("/api/login", values, {})
        .then((res) => {
          //判断用户名和密码是否正确,用后台返回的message作为判断
          console.log("login res :>> ", res);
          if (res.data.code === 200) {

            // console.log("login里res.data.token :>> ", res.data.token);
            this.$store.commit("SET_TOKEN", "Bearer " + res.data.token);
            // console.log("login res.data.user.name :>> ", res.data.user.name);
            // 删除不要的属性
            delete res.data.user.nation

            this.$store.commit("SET_USER", JSON.stringify(res.data.user));
            this.$store.commit("SET_NAME", res.data.user.name);
            this.$store.commit("SET_SEX", res.data.user.sex);
            this.$store.commit("SET_ID", res.data.user.id);

            console.log('this.$store.state.sex :>> ', this.$store.state.sex);
            // 记录登录日志
            this.$http.post("/api/log", {name:res.data.user.name,type:'Login',keyword:''}).then((res) => {});

            //跳转到主页
            this.$router.push("/home");
            // this.$notify({ type: "success", message: "登录成功!" ,duration:1000});
            Toast.success("登录成功");
          } else {
            //失败
            this.$store.commit("LOGOUT");
            Toast(res.data.message);
          }
        })
        .catch((err) => {
          console.log("错误:", err);
          alert("错误代码: " + err.status + ", 错误信息:" + err.statusText);
        });
    },
    logout() {
      this.$store.commit("LOGOUT");
      // this.$router.push("/login");
    },
  },
};
</script>

<style scope>
.login-register {
  display: flex;
  justify-content: space-between;
  /* align-items: baseline; */
}
.login-register span {
  font-size: 10px;
  color: cornflowerblue;
  font-size: 13px;
  margin: 10px 30px 10px 30px;
}
</style>