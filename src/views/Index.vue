<!--
 * @作者: Edwin Yeung
 * @Date: 2021-05-23 00:15:14
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-05 17:17:15
 * @描述: 
-->
<template>
  <div class="index">
    <!-- keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。 -->
    <keep-alive include="Home,Login,Activity,My">
      <router-view />
    </keep-alive>
    <van-tabbar
      active-color="#d53c3e"
      route
      safe-area-inset-bottom
      z-index="999"
    >
      <van-tabbar-item replace to="/home">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          name="xinwenguanli"
        ></van-icon>
        <span>动态</span>
      </van-tabbar-item>
      <van-tabbar-item to="/punch">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          name="fengxianpinggu"
        ></van-icon>
        <span>打卡</span>
      </van-tabbar-item>
      <van-tabbar-item to="/activity">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          name="shipin"
        ></van-icon>
        <span>活动</span>
      </van-tabbar-item>
      <van-tabbar-item  icon="contact" to="/my">
          <!-- name="shipin" -->
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      active: 0,
    };
  },

  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  .iconfont {
    font-size: 20px;
  }
}
</style>