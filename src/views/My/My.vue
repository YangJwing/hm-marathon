<!--
 * @作者: Edwin Yeung
 * @Date: 2020-03-15 12:01:36
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-06 10:45:48
 * @描述: 
 -->
<template>
  <div id="me">
    <van-row>
      <!-- 头像 -->
      <van-col class="avatar" span="6">
        <van-image
          class="avatar-item"
          v-if="sex"
          cover
          round
          width="1rem"
          height="1rem"
          :src="require('../../assets/man.svg')"
        />
        <van-image
          class="avatar-item"
          v-if="!sex"
          round
          cover
          width="1rem"
          height="1rem"
          :src="require('../../assets/woman.svg')"
        />
      </van-col>
      <!-- 用户信息 -->
      <van-col span="9" @click="$router.push('/mydetail')">
        <div class="userinfo">
          <div class="user">
            {{ name }}
            <span v-if="sex"
              ><van-icon :name="require('../../assets/male.svg')"></van-icon>
            </span>
            <span v-else
              ><van-icon :name="require('../../assets/female.svg')"></van-icon>
            </span>
            <span v-show="role" style="font-size: 12px; color: #666"
              >（管理员)</span
            >
          </div>
          <!-- 编号 -->
          <div class="nobg">
            <div class="number">
              <span><van-icon name="notes-o" /></span>
              <span>虎马协{{ user.mem_no }}</span>
            </div>
          </div>
        </div>
      </van-col>
      <!-- 右箭头图标 -->
      <van-col class="right" span="9" @click="$router.push('/mydetail')">
        <van-icon name="arrow"></van-icon>
      </van-col>
    </van-row>

    <!-- 积分和等级 -->
    <div class="grade">
      <div class="grade-item" @click="onClick(1)">
        <div>{{ user.integral }}</div>
        <div>积分</div>
      </div>
      <div class="grade-item" @click="onClick(2)">
        <div>{{ user.grade }}</div>
        <div>等级</div>
      </div>
    </div>

    <!-- 关于... -->
    <van-cell-group>
      <van-cell
        v-if="role"
        title="订餐情况统计表"
        icon="cart-o"
        value="管理员可进入"
        is-link
        to="/orderCount"
      />
      <van-cell title="订餐记录" icon="todo-list-o" is-link to="/myorders" />
      <van-cell title="设置" icon="setting-o" is-link to="/setup" />
      <van-cell title="帮助" icon="question-o" is-link to="/help" />
      <van-cell title="问题与建议" icon="records" is-link to="/suggest" />
      <van-cell title="关于" icon="info-o" is-link to="/aboutme" />
      <van-cell
        title="注销我的登录"
        icon="close"
        is-link
        @click.native="logout"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "", // 姓名
      role: null, // 角色
      sex: "", // 性别
      grade: "", // 等级
      integral: 0,
      user: {},
    };
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          title: "你确定要注销吗",
          cancelButtonColor: "#e00",
          cancelButtonText: "不要",
          message: "注销我的登录，下次必须登录才能使用！",
        })
        .then(() => {
          //on confirm
          //订单入库
          this.$store.commit("LOGOUT");
          this.$router.push("/login");
          this.isLogin = false;
          console.log("logout click");
        })
        .catch(() => {
          // on Cancel
        });
    },

    onClick(index) {
      if (index == 1) {
        this.$toast("积分功能暂未开放，敬请期待");
      } else {
        this.$toast("等级功能暂未开放，敬请期待");
      }
    },
    getName() {
      // this.user = this.$store.state.user;
      this.user = JSON.parse(localStorage.getItem("user"));
      this.name = this.$store.state.name;
      this.sex = this.$store.state.sex == "男" ? 1 : 0;
      console.log("this.user :>> ", this.user);
    },
  },
  created() {
    this.getName();
  },
};
</script>

<style scoped>
.avatar-item {
  display: flex;
  margin: 10px 10px 10px 10px;
}
.userinfo {
  margin: 20px 20px 10px 0px;
}
.avatar /deep/ .van-image__img {
  background-color: rgb(253, 245, 170);
  /* border-color: red; */
}
.user {
  font-size: 16px;
}
.number {
  margin-top: 5px;
  background-color: rgba(142, 194, 224, 0.418);
  padding: 4px 7px 4px 10px;
  font-size: 14px;
  border-radius: 5px;
}
.right {
  margin-top: 0.5rem;
  text-align: right;
}
.grade {
  display: flex;
  justify-content: space-around;
  border-bottom: 8px solid #eee;
}
.grade-item {
  /* background-color: #666; */
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
}
.grade-item > div:last-child {
  color: #999;
  margin-top: 5px;
  font-size: 13px;
}
</style>