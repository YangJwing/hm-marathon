<!--
 * @作者: Edwin Yeung
 * @Date: 2020-04-05 21:54:24
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-02 00:25:12
 * @描述: 
 -->
<template>
  <div class="about-me">
    <van-nav-bar
      title="关于"
      left-arrow
      left-text="返回"
      @click-left="onClickLeft"
    />
    <div class="title">
      关于铭荟库存助手小程序
      <van-tag type="success">Ver1.0</van-tag>
    </div>
    <div class="content">
      库存助手小程序是一款移动端的小程序，是出差在外也可随时随地查询到系统库存，
      是红酒营销的好帮手好助手。
    </div>
    <div class="content">
      库存助手小程序可以按商品类型(红葡萄酒、白葡萄酒等)、价格区间、是否有货等条件进行筛选；
      查询过的记录自动记入历史，自动生成热门搜索词条。
    </div>
    <div class="content">
      全栈开发涉及到多个技术层面，因技术水平有限，开发过程难免有错漏，
      使用过程中发现问题或有好的建议，请通过“问题与建议”进行反馈
    </div>
    <div class="content">库存助手小程序更是/更有... (期待您的发现)</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onClickLeft() {
      //返回上一页
      this.$router.go(-1);
    },
    fetchName() {
      this.$http
        // .post(
        //   "/api/aboutme",                                                                                                      
        //   {
        //     data: { mobile: "112" },
        //   },
        //   { headers: { authorization: this.$store.state.token } }
        // )
        .post('/api/aboutme',{})
        .then((res) => {
          console.log("aboutme res.data.name :>> ", res.data.name);
          this.name = res.data.name;
        });
    },
  },
  created() {
    this.fetchName();
  },
  mounted() {},
};
</script>

<style scope>
.van-nav-bar__title {
  color: #000;
}
div.about-me {
  color: #666;
}
.title {
  margin: 30px auto 10px auto;
  /* margin:0 auto ; */
  width: 320px;
  text-align: center;
  font-size: 18px;
}
.content {
  line-height: 20px;
  margin: 20px;
  font-size: 15px;
}
</style>