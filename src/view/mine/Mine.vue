<template>
  <div class="mine">
    <van-cell is-link @click="showPopup">我的订单</van-cell>
    <van-cell is-link @click="showPopup">优惠券</van-cell>
    <van-cell is-link @click="showPopup">影院会员卡</van-cell>
    <van-cell is-link @click="showPopup">想看的电影</van-cell>
    <van-cell is-link @click="showPopup">看过的电影</van-cell>
    <van-popup
      v-model="show"
      position="top"
      :style="{ height: '60%' }"
      closeable
    >
      <img src="~assets/img/meituan.png" alt="" />
      <div class="wx-login" @click="login">微信用户一键登录</div>
      <div class="m-register" @click="login">手机号码登录/注册</div>
    </van-popup>
    <footer>©猫眼电影 客服电话：<i>1010-5335</i></footer>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Mine",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    login() {
      this.$toast("不能点了，滚吧");
    },
  },
};
import { Popup, Cell } from "vant";
Vue.use(Popup).use(Cell);
</script>

<style scoped lang="less">
.mine {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 245, 245);
  .van-cell {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    &:nth-child(4) {
      margin-top: 15px;
    }
    .van-cell__value {
      text-align: center;
    }
  }
  .van-popup {
    text-align: center;
    img {
      height: 290px;
      width: 100%;
    }
    .wx-login,
    .m-register {
      margin: 0 auto;
      width: 348px;
      height: 44px;
      line-height: 44px;
    }
    .wx-login {
      border-radius: 6px;
      background-color: rgb(255, 153, 0);
    }
  }
  footer {
    position: fixed;
    left: 50%;
    bottom: 79px;
    white-space: nowrap;
    transform: translateX(-50%);

    i {
      color: #ffab40;
      text-decoration: underline;
    }
  }
}
</style>