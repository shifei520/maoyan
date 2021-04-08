<template>
  <nav-top-bar
    ><div slot="center" class="nav-center">猫眼电影</div></nav-top-bar
  >
</template>

<script>
import NavTopBar from "components/common/navTopBar/NavTopBar.vue";
export default {
  name: "FilmNavBar",
  components: {
    NavTopBar,
  },
};
</script>

<style scoped lang="less">
.nav-center {
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
}
</style>