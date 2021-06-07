<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-15 13:59:31
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-05-29 19:14:10
 * @描述: 
 -->
<template>
  <div class="homeList">
    <!-- 占位符 44px -->
    <div style="height: 44px"></div>
    <!-- header区域 -->
    <div class="header">
      <div class="header-left">
        <van-image
          round
          width="0.6rem"
          height="0.6rem"
          :src="avatarUrl"
        ></van-image>
      </div>
      <div @click="$router.push('/search')" class="header-input">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          name="sousuo"
        />红酒搜索
      </div>
      <!-- Edwin 右箭头图标 -->
      <router-link to="/login">
        <div class="header-right">
          {{ name }}
          <van-icon class-prefix="icon" class="iconfont" name="jiantou" />
        </div>
      </router-link>
    </div>
    <!-- <form action="/">
      <van-search
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
        background="#d53c3e"
        @focus="$router.push('/search')"
        @input="onInput"
      >
        <template #action>
          <div @click="$router.push('/search')" class="header-input" >
            <van-icon name="user-o" />
            {{name}}
          </div>
        </template>
      </van-search>
    </form> -->

    <!-- 测试标签-->
    <div class="test-tabs">
      <van-tabs animated swipeable class="tabs">
        <van-tab title="铭荟" name="mhList"> </van-tab>
        <van-tab title="富隆" name="flList"> </van-tab>
        <van-tab title="东城" name="dcList"> </van-tab>
        <van-tab title="中顺" name="zsList"> </van-tab>
      </van-tabs>
    </div>

    <!-- thumb="../../static/img/wine.png" -->
    <van-card
      v-for="(item,index) in wines"
      :key="index"
      num="6"
      :price="item.sale_price"
      :title="item.item_name"
      :desc="item.item_size"
      :thumb="`../../static/img/${item.classname}.png`"
    >
      <template #tags>
        <!-- 进价,折后价 -->
        <van-tag size="small" type="success">{{
          parseInt(item.in_price)
        }}</van-tag>
        <van-tag plain size="small" type="success">{{
          parseInt(item.sale_price * 0.85)
        }}</van-tag>
        <van-tag plain size="small" type="success">{{
          parseInt(item.sale_price * 0.88)
        }}</van-tag>
        <van-tag plain size="small" type="primary">{{
          parseInt(item.sale_price * 0.9)
        }}</van-tag>
        <van-tag plain size="small" type="warning">{{
          parseInt(item.sale_price * 0.92)
        }}</van-tag>
        <van-tag plain size="small" type="danger">{{
          parseInt(item.sale_price * 0.95)
        }}</van-tag>
        <!-- 规格 -->
        <!-- <van-tag plain type="primary">{{item.item_size}}</van-tag> -->
        <!-- 类别 -->
        <!-- <van-tag plain type="danger">{{item.classname}}</van-tag> -->
      </template>
      <template #num>
        <!-- 库存数量 -->
        X
        <span style="color: black; font-size: 16px">{{ item.stock_qty }}</span>
      </template>
    </van-card>

    <van-loading v-show="loading" size="24px" vertical>加载中...</van-loading>
    <!-- 空状态 -->
    <van-empty v-show="!count" image="search" description="" />
    <!-- 分割线,有记录才显示 -->
    <van-divider v-show="count"
      ><div>到底了</div>
      ~
      <div>共找到 {{ count }} 件商品</div></van-divider
    >
    <!-- tabbar遮挡页面解决方法 -->
    <!-- <div style="height: 5rem"></div> -->
    <div style="height: 50px"></div>
  </div>
</template>

<script>
import { Toast } from "vant"; // Toast的引用有问题
export default {
  data() {
    return {
      name: "",
      value: "", //
      wines: [],
      price: [
        "100以下",
        "100-300",
        "300-500",
        "500-1000",
        "1000-3000",
        "3000以上",
      ],
      avatarUrl: require("../assets/defualtAvator.png"),
      count: 0,
      loading: false, //是否显示加载
      filterShow: false,
      plain: false,
      activeNames: ["1"],
      // pic_name:"",
    };
  },
  methods: {
    onSearch(val) {
      if (val === "") {
        Toast("关键词不能为空");
        return;
      }
      this.loading = true;
      // 拆解关键字组合,以空格为界限符，正则匹配空格
      let key1 = val.trim().split(/\s+/)[0];
      let key2 = val.trim().split(/\s+/)[1] || "";

      //  console.log('wineName :>> ', wineName);

      //   console.log('key1 :>> ', key1+'-');
      //   console.log('key2 :>> ', '-'+key2+'-');
      // Toast(val)
      this.$http
        .get("/api/getstock", { params: { key1, key2 } })
        .then((res) => {
          if (res.data.count === 0) {
            Toast.fail("搜索结果为空");
            this.wines = [];
            this.count = 0;
          } else {
            this.wines = res.data.wineStock;
            this.count = res.data.count;
            // 记录登录日志
            this.$http
              .post("/api/log", {
                name: this.name,
                type: "Search",
                keyword: val,
              })
              .then((res) => {});
          }
          this.loading = false;
        });
    },
    onInput(val) {
      // 清空Card列表
      if (val === "") {
        this.wines = [];
        this.count = 0;
      }
    },
    onFilter() {
      Toast("Filter press");
      this.filterShow = !this.filterShow;
    },
    tagClick(index) {
      this.plain = !this.plain;
      Toast("您选中的是:" + index);
    },
  },
  created() {
    this.name = this.$store.state.name;
  },
};
</script>


<style lang="less" scoped>
  @import "../assets/less/home.less";
</style>
