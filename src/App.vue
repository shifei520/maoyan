<template>
  <div id="app">
    <film-nav-bar />
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <keep-alive exclude="ChaseCitys,Detail"><router-view /></keep-alive>
    </transition>
    <bottom-bar />
  </div>
</template>

<script>
import FilmNavBar from "view/film/childComps/FilmNavBar.vue";
import BottomBar from "components/content/bottomBar/BottomBar.vue";

export default {
  name: "App",
  components: {
    BottomBar,
    FilmNavBar,
  },
};
</script>
<style >
@import "~assets/css/base.css";
</style>
