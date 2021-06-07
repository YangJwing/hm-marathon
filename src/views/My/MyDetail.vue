<!--
 * @作者: Edwin Yeung
 * @Date: 2021-06-05 15:17:59
 * @修改人: Edwin Yeung
 * @LastEditTime: 2021-06-07 02:48:51
 * @描述: 
-->
<template>
  <div class="mydetail">
    <van-nav-bar
      title="我的资料"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="onClickRight"
    />
    <!-- <van-cell v-for="(item,idx) in user" :key="idx"   > -->
    <van-cell class="value_w74" title="姓名" :value="user.name" is-link ></van-cell>
    <van-cell class="value_w74" title="会员编号" :value="`虎马协${user.mem_no}`" is-link ></van-cell>
    <van-cell class="value_w74" title="性别" :value="user.sex" is-link ></van-cell>
    <van-cell class="value_w74" title="身份证" :value="user.idcard" is-link> </van-cell>
      <!-- plain  type="primary" @touchstart.native.stop="show = true"></van-cell> -->
    <!-- <van-number-keyboard
      v-model="user.idcard"
      :show="show1"
      extra-key="X"
      close-button-text="完成"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    /> -->
    <van-cell class="value_w74" title="生日" :value="user.birth" is-link ></van-cell>
    <van-cell class="value_w74" title="手机" :value="user.phone" is-link ></van-cell>
    <van-cell class="value_w74" title="血型" :value="user.blood" is-link ></van-cell>
    <van-cell class="value_w74" title="身高" :value="`${user.height||''}cm`" is-link ></van-cell>
    <van-cell class="value_w74" title="体重" :value="`${user.weith||''}kg`" is-link ></van-cell>
    <van-cell class="value_w74" title="邮箱" :value="user.email" is-link ></van-cell>
    <van-cell v-model="areaName" title="现居住地省/市" :value="`${user.province}/${user.city}/${user.country}`" is-link @click="onClick" ></van-cell>
    <van-popup v-model="show" position="bottom">
      <van-area title="省/市/区" :area-list="areaList" value="440000"
        @change="onChange"
        @confirm="show = false"
        @cancel="show = false"
      />
    </van-popup>
    <van-cell class="value-w74 van-ellipsis" title="居住地" :value="user.address" is-link ></van-cell>
    <van-cell class="value_w74" title="衣服尺码" :value="user.size" is-link ></van-cell>
    <van-cell class="" title="紧急联系人" :value="user.emergency" is-link ></van-cell>
    <van-cell title="紧急联系人电话" :value="user.emergency_phone" is-link ></van-cell>
    <van-cell class="value_w74 van-ellipsis" title="工作单位" :value="user.company" is-link ></van-cell>
  </div>
</template>

<script>
import {areaList} from '@vant/area-data'
export default {
  name: "Index",
  data() {
    return {
      user: {},
      show:false,
      areaList,
      areaName:'',
    };
  },
  methods: {
    getName() {
      this.user =JSON.parse(localStorage.getItem("user"));
      this.user.birth = new Date(this.user.birth).Format("yyyy-mm-dd")
    },
    onClickRight() {},
    onClick() {
      this.show=true
    },
    onInput(){},
    onDelete(){},
    //value=0改变省，1改变市，2改变区
    onChange(picker, index, value){
      let val = picker.getValues();
      console.log(val)//查看打印
      let areaName = ''
      for (var i = 0; i < val.length; i++) {
        areaName = areaName+(i==0?'':'/')+val[i].name
      }
      this.areaName = areaName
    },

    // onChange (picker, value, index) {
    //     console.log('当前值：' + value + '当前索引：' + index)
    //     console.log(value)
    //     let areaName = ''
    //     for (var i = 0; i < value.length; i++) {
    //       areaName = areaName + value[i].name + ' '
    //     }
    //     this.areaName = areaName
    // },
  },
  created() {
    this.getName();
  },
  
  mounted() {},
  computed: {},
};
</script>

<style>
/* 调整van-cell value 的宽度 */
.value_w74 /deep/ .van-cell__value{
  min-width: 74%;
  color:rgb(209, 188, 133);
}
</style>