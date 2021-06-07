<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-15 13:59:31
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-02 00:04:50
 * @描述: 
 -->
<template>
  <div class="home">
    <!-- 上点位符 search 34px + dropdown 48px -->
    <!-- <div style="height: 95px"></div> -->

    <div class="searchTop">
      <!-- 搜索组件 -->
      <!-- Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。 -->
      <div style="flex: 1">
        <form action="/">
          <van-search
            class="search"
            v-model.trim="searchVal"
            placeholder="请输入搜索关键词"
            shape="round"
            show-action
            background="#d53c3e"
            id="searchInput"
            @search="onSearch"
            @cancel="$router.go(-1)"
            @clear="onClear"
            @input="onInput"
          >
            <!-- <template #action>
          <div @click="onFilter" style="color: white">
            <van-icon name="filter-o" />
            取消
          </div>
        </template> -->
          </van-search>
        </form>
      </div>

      <van-dropdown-menu z-index="999">
        <van-dropdown-item
          @change="screen"
          v-model="value1"
          :options="option1"
        />
        <van-dropdown-item
          @change="screen"
          v-model="value2"
          :options="option2"
        />
        <van-dropdown-item
          @change="screen"
          v-model="value3"
          :options="option3"
        />
      </van-dropdown-menu>
    </div>

    <!-- 搜索到的内容 -->
    <div class="searchRes">
      <!-- searchFlag 为true时显示热门和历史 -->
      <!-- 历史搜索************************************************* -->
      <div class="noSearch" v-if="searchFlag">
        <div class="noSearchHit">热门搜索</div>
        <div class="noSearchBd">
          <van-tag
            v-for="(item, idx) in searchHot"
            :key="idx"
            type="warning"
            size="large"
            @click="record(item)"
            >{{ item }}</van-tag
          >
        </div>
        <div class="noSearchHit">历史搜索</div>
        <div class="noSearchBd">
          <!-- color="#ffffff"
            text-color="#646464" -->
          <van-tag
            v-for="(item, idx) in searchValHist"
            :key="idx"
            type="primary"
            color="#e8e8e8"
            text-color="#646464"
            size="large"
            @click="record(item)"
            >{{ item }}</van-tag
          >
          <p class="clearHist" v-if="clearHistFlag" @click="handlerClearHist">
            清除搜索历史记录
          </p>
          <p class="clearHist" v-else>暂无搜索记录</p>
        </div>
      </div>
      <!-- 历史搜索************************************************* END -->
      <div class="hasSearch" v-else>
        <!-- 空状态 -->
        <van-empty
          v-if="searchRes.length == 0"
          image="search"
          description="未搜索到相关内容"
        />

        <van-list
          :immediate-check="false"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          v-model="loading"
          :finished="finished"
          :finished-text="`到底了~共找到 ${total} 件商品`"
          @load="onLoad"
        >
          <van-card
            v-for="(item, index) in searchRes"
            :key="index"
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
              <van-tag plain size="small" type="warning">{{
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
              <span
                :class="[item.stock_qty ? 'stockBlack' : 'stockRed', 'stock']"
                >{{ item.stock_qty }}</span
              >
            </template>
          </van-card>
        </van-list>
      </div>
      <!-- <van-loading v-show="loading" size="24px" vertical>加载中...</van-loading> -->

      <!-- 分割线,有记录才显示 -->
      <!-- <van-divider v-show="total">
        <div>到底了</div>~<div>共找到 {{ this.total }} 件商品</div>
      </van-divider> -->

      <!-- tabbar遮挡页面解决方法 -->
      <!-- <div style="height: 5rem"></div> -->
      <!-- <div style="height: 50px"></div> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"; // Toast的引用有问题
export default {
  data() {
    return {
      name: "",
      searchVal: "", // 搜索关键词
      searchRes: [], // 搜索结果数组
      searchValHist: [], // 搜索历史记录
      // searchHot: ["拉菲", "拉图", "玛歌", "武当", "红颜容"], // 热门搜索
      searchHot: [],
      total: 0, // 搜索到的总记录数
      value1: -2, // 全部类型
      value2: "all", // 价格区间
      value3: ">=0", // 库存状态
      error: false,
      loading: false,
      finished: false,
      searchFlag: true,

      query: {
        page: 1,
        size: 10,
        search: "",
        key1: "",
        key2: "",
        stockOprator: "",
        classid: "",
        price1: "",
        price2: "",
      },

      option1: [{ text: "全部类型", value: -2 }],
      option2: [
        { text: "全部价格", value: "all" },
        { text: "100元以下", value: "0-100" },
        { text: "100-300元", value: "100-300" },
        { text: "300-500元", value: "300-500" },
        { text: "500-1000元", value: "500-1000" },
        { text: "1000-3000元", value: "1000-3000" },
        { text: "3000元以上", value: "3000+" },
      ],
      option3: [
        { text: "全部库存", value: ">=0" },
        { text: "有库存", value: ">0" },
        { text: "零库存", value: "=0" },
      ],
    };
  },
  methods: {
    onSearch(val) {
      if (val.length == 0) return Toast("请输入搜索内容");
      // this.searchValHist.push(val);
      this.searchValHist.unshift(val);
      this.query.search = val;
      this.getSearchRes();
      localStorage.setItem("searchValHist", JSON.stringify(this.searchValHist));
      this.searchFlag = false;
    },

    // 填写搜索参数  // 搜索结果
    getSearchRes() {
      this.query.classid = this.value1 == -2 ? "%" : this.value1;
      this.query.stockOprator = this.value3;
      this.query.price1 = this.getPriceSection(this.value2)[0];
      this.query.price2 = this.getPriceSection(this.value2)[1];
      // 拆解关键字组合,以空格为界限符，正则匹配空格
      this.query.key1 = this.searchVal.trim().split(/\s+/)[0];
      this.query.key2 = this.searchVal.trim().split(/\s+/)[1] || "";
      console.log("p1,p2 :>> ", this.query.price1, this.query.price2);
      this.query.page = 1;
      window.scrollTo(0, 0);
      this.finished = false;
      this.loading = false;
      console.log(
        "this.$qs.stringify(this.query) :>> ",
        this.$qs.stringify(this.query)
      );
      this.$http
        // .get("/api/getstock", { params: {} })
        .get("/api/getstock?" + this.$qs.stringify(this.query), {
          timeout: 10000,
        })
        .then((res) => {
          if (res.data.code != 200) {
            Toast.fail("搜索结果为空");
            this.searchRes = [];
            return;
          }
          this.searchRes = res.data.wineStock;
          // console.log('searchRes :>> ', this.searchRes);
          this.total = res.data.total;
          // 记录登录日志
          this.$http
            .post("/api/log", {
              name: this.name,
              type: "Search",
              keyword: this.searchVal,
              classid: this.value1,
              price: this.value2,
            })
            .then((res) => {
              // 什么也不做
            });

          this.loading = false;
        })
        .catch((err) => {
          // Toast(error);
          Toast.fail({ message: "服务器出错\n请稍后再试", duration: 5000 });
        });
    },
    // 获取商品类型并加入到选择列表
    getClass() {
      let classid = 4;
      //  this.$http.get("/api/getclass", { params: {classid} }).then((res) => {
      this.$http
        .get("/api/getclass?classid=-2&classlevel=2", { timeout: 5000 })
        .then((res) => {
          if (res.data.code !== 200)
            return Toast.fail({
              message: "商品种类获取失败!",
              position: "bottom",
            });
          let classType = res.data.data;
          // map 的高效用法
          classType.map((value) => {
            this.option1.push({ text: value.classname, value: value.classid });
          });
        });
    },

    // 获取热门搜索词条列表
    getHotKeyword() {
      this.$http.get("/api/getHotKeyword", { timeout: 5000 }).then((res) => {
        if (res.data.code == 200) {
          let hot = res.data.data;
          console.log("hot :>> ", hot);
          // map 的高效用法
          this.searchHot = [];
          hot.map((value) => {
            this.searchHot.push(value.keyword);
          });
        }
      });
    },

    //滚动到底部会触发的事件
    async onLoad() {
      this.query.page += 1;
      if (this.searchRes.length >= this.total) {
        return (this.finished = true);
      }
      console.log(
        "this.$qs.stringify(this.query) page:>> ",
        this.$qs.stringify(this.query),
        this.query.page
      );
      this.$http
        .get("/api/getstock?" + this.$qs.stringify(this.query))
        .then((res) => {
          if (res.data.code != "200") return (this.error = true);
          this.searchRes.push(...res.data.wineStock);
          this.loading = false;
        });
    },
    onInput(val) {
      // 清空Card列表
      if (val === "") {
        this.searchRes = [];
        console.log("searchRes.length :>> ", this.searchRes.length);
        this.searchFlag = true;
      }
    },
    record(item) {
      this.searchVal = item;
      this.onSearch(item);
    },
    onClear() {
      // Toast("test");
      this.searchFlag = true;
      this.query.search = "";
      // this.getSearchRes();
    },
    // 删除历史记录
    handlerClearHist() {
      this.searchValHist = [];
      localStorage.setItem("searchValHist", JSON.stringify(this.searchValHist));
    },
    // 筛选
    screen() {
      if (this.query.search.length == 0) return console.log("请输入搜索内容");
      // console.log('ok')
      this.getSearchRes();
    },

    // 价格区间
    getPriceSection(val) {
      let price1, price2;
      switch (val) {
        case "0-100":
          price1 = 0;
          price2 = 100;
          break;
        case "100-300":
          price1 = 100.01;
          price2 = 300;
          break;
        case "300-500":
          price1 = 300.01;
          price2 = 500;
          break;
        case "500-1000":
          price1 = 500.01;
          price2 = 1000;
          break;
        case "1000-3000":
          price1 = 1000.01;
          price2 = 3000;
          break;
        case "3000+":
          price1 = 3000.01;
          price2 = 10000000000;
          break;
        default:
          price1 = 0;
          price2 = 10000000000;
      }
      return [price1, price2];
    },
  },
  computed: {
    clearHistFlag() {
      if (this.searchValHist.length) return true;
      else false;
    },
  },
  created() {
    this.name = this.$store.state.name;
    // 取出存储里的历史搜索记录并转为数组
    this.searchValHist =
      JSON.parse(localStorage.getItem("searchValHist")) || [];
    console.log("this.searchValHist :>> ", this.searchValHist);
  },
  mounted() {
    this.getClass(); // 获取商品类型
    this.getHotKeyword(); // 获取热门搜索关键词
    document.getElementById("searchInput").focus(); // 搜索框获取焦点
  },
};
</script>

<style scoped>
/* 搜索框和下拉菜单(固定显示) */
.searchTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* height: 0.88rem; */
  /* display: flex; */
  /* background: rgb(133, 133, 143); */
  /* padding: 0.14rem 0.24rem; */
  z-index: 999;
}
/* 搜索结果的显示区域 */
.searchRes {
  position: absolute;
  /* position: relative; */
  /* 不要用 rem ,否则不同的设备间距不一样 */
  top: 90px;
  z-index: 99;
  width: 100%;
}
/* 热门和历史搜索 */
.searchRes .noSearch .noSearchHit {
  line-height: 0.65rem;
  background: #f5f5f5;
  padding: 0 0.24rem;
}
/* 热门标签 */
.searchRes .noSearch .noSearchBd {
  padding: 0 0.24rem;
  margin-bottom: 0.24rem;
}
/* 热门标签 */
.searchRes .noSearch .noSearchBd .van-tag {
  margin: 0.24rem 5px 0 5px;
}
/* 清除搜索 */
.searchRes .noSearch .noSearchBd .clearHist {
  color: #646464;
  text-align: center;
  margin-top: 0.4rem;
}
.searchRes .hasSearch {
  padding: 0 0.24rem;
  color: #d8d8d8;
}
/* 取消按钮 */
.searchTop /deep/ .van-search__action {
  color: rgb(240, 240, 240);
  font-size: 16px;
}
.searchTop /deep/ .van-cell--borderless {
  padding: 3px 8px 3px 0;
  height: 30px;
  font-size: 15px;
}
/* 清除图标 */
.searchTop >>> .van-icon {
  color: #d53c3e;
}
/* 下拉菜单高度 */
.searchTop /deep/ .van-dropdown-menu__bar {
  height: 38px;
}
.price {
  /* color:rgb(223, 50, 50); */
  margin: 0 10px 10px 5px;
}

.stock {
  font-size: 16px;
}
.stockBlack {
  /* font-size: 16px; */
  color: black;
}
.stockRed {
  font-size: 18px;
  color: red;
  /* border-bottom: 1px solid; */
}
</style>
