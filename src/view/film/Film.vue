<template>
  <div id="film">
    <banner-bar />

    <!-- <van-skeleton
      avatar
      :row="3"
      :loading="loading"
      avatar-size="60px"
      avatar-shape="square"
      class="skeleton"
      v-for="num in 10"
    >
    </van-skeleton> -->
    <transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <keep-alive>
        <router-view
          :movieLists="movieLists"
          @pullDownLoad="pullDownLoad"
          @pullUp="pullUp"
          ref="hotShow"
        ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import BannerBar from "./childComps/BannerBar.vue";

//引入热映数据
import { hotFilm } from "network/film.js";
//映入防抖函数
import { debounce } from "common/utils.js";

import Vue from "vue";
import { Skeleton } from "vant";

Vue.use(Skeleton);
export default {
  name: "Film",
  components: {
    BannerBar,
  },

  data() {
    return {
      movieLists: [],
      start: 0,
      limit: 10,
      city: "合肥",
      loading: true,
    };
  },
  created() {
    const refresh = debounce(this.BSrefresh, 200);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  mounted() {
    this.getMovieList(this.limit, this.start, this.city);
  },
  watch: {
    "$store.state.city": function () {
      this.city = this.$store.state.city;
      this.getMovieList(this.limit, this.start, this.city);
    },
  },
  methods: {
    //上拉加载
    pullUp() {
      this.pageAdd();
      this.BSfinishPullUp();
    },
    //下拉刷新
    pullDownLoad(start, limit, city) {
      this.movieLists = [];
      this.start = start;
      this.limit = limit;
      this.city = city;
      this.getMovieList(this.limit, this.start, this.city);
      setTimeout(() => {
        this.BSrefresh();
      }, 500);
    },
    //请求数据
    getMovieList(limit, start, city) {
      // console.log(this.$route);
      hotFilm(limit, start, city).then((res) => {
        setTimeout(() => {
          this.movieLists = res.data.data.hot;
          this.loading = false;
        }, 1000);
      });
    },

    pageAdd() {
      let limit = this.limit + 10;
      hotFilm(limit, this.limit, this.city).then((res) => {
        this.movieLists = this.movieLists.concat(res.data.data.hot);
      });
    },

    //调用betterscroll的refresh方法刷新
    BSrefresh() {
      this.$refs.hotShow.$refs.movieList.$refs.betterScroll.refreshed();
    },
    //调用betterscroll的上拉加载完成
    BSfinishPullUp() {
      this.$refs.hotShow.$refs.movieList.$refs.betterScroll.finishPullUp();
    },
  },
};
</script>

<style scoped lang="less">
#film {
  position: relative;
  height: 100vh;
  .skeleton {
    margin-top: 10px;
  }
}
</style>