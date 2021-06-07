<!--
 * @作者: Edwin Yeung
 * @Date: 2020-02-14 23:16:25
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-04 15:57:33
 * @描述: 
 -->
<template>
  <div id="app">
    </van-tabbar>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      islogin:false,
      active:0,
      nav_title:'2021"母亲节"接力赛成绩',
      isShowBar:true,
    };
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/login")
      this.isLogin=false
      console.log("logout click");
      console.log('logout() this.$store.islogin :', this.$store.islogin);
    },
    getlogin(){
      this.islogin=this.$store.state.islogin
      // console.log('getlogin() this.$store.state.islogin :', this.$store.state.islogin);
    },
    onChange(index){
      if(index==1) this.nav_title="个人中心"
    },
  },
  computed: {
    getName() {
      // console.log('name :',this.$store.state.user);
      return this.name=this.$store.state.user?"【" + this.$store.state.user +"】"+this.$store.state.userid:''
    },
    
  },
  updated(){
    this.getlogin()
    this.isShowBar=this.$store.state.isShowBar
    // console.log('主页 this.isShowBar :', this.$store.state.isShowBar);
  }
};
</script>

<style>
/* navbar 的颜色和底色 */
  .home-nav{
    /* background-color: #398dee; */
  }
  .van-nav-bar__title {
  color: rgb(58, 6, 248);
}
  .van-tabbar{
    background-color:rgb(247,247,247);
  }
</style>
