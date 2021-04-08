<template>
  <div class="nav-top-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavTopBar",
};
</script>

<style lang="less" scoped>
.nav-top-bar {
  position: relative;
  top: 0;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: rgb(220, 63, 58);
  > div:nth-child(1),
  div:nth-child(3) {
    width: 60px;
  }
  div:nth-child(2) {
    flex: 1;
    text-align: center;
  }
}
</style>