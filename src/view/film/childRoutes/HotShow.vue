<template>
  <movie-list
    :movieList="movieLists"
    @pullDownLoad="pullDownLoad"
    @pullUp="pullUp"
    ref="movieList"
  />
</template>

<script>
import MovieList from "../childComps/MovieList.vue";
export default {
  name: "HotShow",
  props: {
    movieLists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    MovieList,
  },
  methods: {
    pullDownLoad(start, limit, city) {
      this.$emit("pullDownLoad", start, limit, city);
    },
    pullUp() {
      this.$emit("pullUp");
    },
  },
};
</script>

<style>
</style>