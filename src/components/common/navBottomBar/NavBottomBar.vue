<template>
  <div class="main-tabbar">
    <div class="left" @click="nowClick">
      <slot name="left"></slot>
    </div>
    <div class="center" @click="nowClick"><slot name="center"></slot></div>
    <div class="right" @click="nowClick"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBottomBar",
  props: {
    path: String,
  },
  methods: {
    nowClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
.main-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
  padding-top: 4px;
  text-align: center;
  background-color: #eee;
  div {
    flex: 1;
  }
}
</style>