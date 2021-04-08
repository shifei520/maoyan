<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullDownRefresh: {
        // 下拉距离超过30px触发pullingDown事件
        threshold: 30,
        // 回弹停留在距离顶部20px的位置
        stop: 0,
      },
      pullUpLoad: true,
      click: true,
    });
    this.scroll.on("pullingDown", () => {
      //给父组件传递信息
      this.$emit("pullDown");
      setTimeout(() => {
        this.scroll.finishPullDown();
      }, 2000);
    });
    setTimeout(() => {
      this.refreshed();
    }, 500);
    //上啦加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUp");
      this.$bus.$emit("toastInfo");
      this.scroll.finishPullUp();
    });
  },

  methods: {
    refreshed() {
      this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style>
</style>