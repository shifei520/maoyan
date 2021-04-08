<template>
  <div class="detail-footer">
    <div class="purchase" @click="payee">优惠购票</div>
    <div class="payee">
      <img src="~assets/img/payee.png" alt="" />
      <div @click="close">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFooter",
  methods: {
    payee() {
      const payee = document.querySelector(".payee");
      payee.style.display = "flex";
      this.$bus.$emit("openBox", "block");
    },
    close() {
      const payee = document.querySelector(".payee");
      payee.style.display = "none";
      this.$bus.$emit("openBox", "none");
    },
  },
};
</script>

<style scoped lang="less">
.purchase {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  color: #fff;
  line-height: 49px;
  text-align: center;
  background-color: #ff3d00;
  z-index: 999;
}
.payee {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 133px;
  width: 50%;
  background-color: #fff;
  transform: translateX(50%);
  z-index: 9999;
  img {
    width: 80%;
  }
  div {
    width: 80%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin-top: 8px;
    background-color: #ff3d00;
    border-radius: 24px;
  }
}
</style>