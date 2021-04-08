<template>
  <div class="coming-show">
    <h4>近期最受欢迎</h4>
    <div class="popu-header">
      <ul class="wel-lists">
        <li v-for="(item, index) in popularMovieLists" :key="index">
          <img :src="item.img | wh(95.128)" alt="" />
          <div>{{ item.nm }}</div>
          <p>{{ item.wish }}人想看</p>
          <p>{{ item.rt | datafilter }}</p>
        </li>
      </ul>
    </div>

    <movie-list
      :movieList="comingMovieLists"
      class="coming-list"
      ref="movieList"
    />
  </div>
</template>

<script>
//引入待映数据
import { comingFilmV1, comingFilmV2 } from "network/film.js";
import MovieList from "../childComps/MovieList.vue";
import Vue from "vue";
Vue.filter("datafilter", (value) => {
  const arr = value.split("-");
  let m = parseInt(arr[1]) > 10 ? arr[1] : arr[1].substr(1, 1);
  let d = parseInt(arr[2]) > 10 ? arr[2] : arr[2].substr(1, 1);
  return m + "月" + d + "日";
});
//引入toast
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "WillShow",
  data() {
    return {
      popularMovieLists: [],
      comingMovieLists: [],
    };
  },
  components: {
    MovieList,
  },
  created() {
    this.getComingData();
    this.$bus.$on("toastInfo", () => {
      Toast("没有更多了");
    });
  },
  methods: {
    //请求待映数据
    getComingData() {
      comingFilmV1(30, 0, "56").then((res) => {
        this.popularMovieLists = res.data.data.coming;
      });
      comingFilmV2(10, "56").then((res) => {
        this.comingMovieLists = res.data.data.coming;
      });
    },
  },
};
</script>

<style scoped lang="less">
.coming-show {
  h4 {
    margin: 15px 0 0 10px;
  }
  .popu-header {
    overflow: scroll;
    padding: 10px;
    border-bottom: 12px solid #eee;
    .wel-lists {
      width: 105 * 30px;
      margin-top: 10px;
      li {
        float: left;
        width: 95px;
        p {
          font-size: 12px;
          color: #999;
        }
        div,
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      li:nth-child(n + 2) {
        margin-left: 10px;
      }
    }
  }
  .coming-list {
    margin-top: 280px;
  }
}
</style>