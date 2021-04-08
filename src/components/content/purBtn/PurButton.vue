<template>
  <div class="pur-btn" :class="nowClass">
    <a href="javascript:void(0)">{{ ticketInfo }}</a>
  </div>
</template>

<script>
export default {
  name: "PurButton",
  props: {
    ticketInfo: {
      type: String,
      default() {
        return "";
      },
    },
  },
  computed: {
    nowClass() {
      return this.ticketInfo == "购票" ? "can-buy" : "cannot-buy";
      // return "can-buy";
    },
  },
};
</script>

<style scoped lang="less">
.pur-btn {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  a {
    color: #fff;
  }
}
.can-buy {
  background-color: rgb(239, 66, 56);
}
.cannot-buy {
  background-color: rgb(82, 176, 235);
}
</style>