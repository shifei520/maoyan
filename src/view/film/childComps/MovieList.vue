<template>
  <better-scroll
    class="film-scroll"
    @pullDown="pullDown"
    @pullUp="pullUp"
    ref="betterScroll"
  >
    <div class="movie-list">
      <div
        class="movie-list-item"
        v-for="(item, index) in movieList"
        :key="index"
        @click="enterDetail(item.id)"
      >
        <div>
          <img :src="item.img | wh(70.97)" alt="" @load="imgLoad" />
        </div>
        <div>
          <h2>{{ item.nm }}<movie-ver :ver="item.ver" /></h2>
          <p>{{ item.cat }}</p>
          <p>{{ item.desc }}</p>
          <span>{{ item.showInfo }}</span>
        </div>
        <div>
          <i v-if="!item.preSale">{{ item.mk.toFixed(1) }}分</i>
          <i v-else class="wish">{{ item.wish }} <span>人想看</span> </i>
          <pur-button :ticketInfo="getTicketInfo(item)" class="pur-btn" />
        </div>
      </div>
    </div>
  </better-scroll>
</template>

<script>
import PurButton from "components/content/purBtn/PurButton.vue";
import MovieVer from "./MovieVer.vue";
import BetterScroll from "components/common/scroll/BetterScroll.vue";
export default {
  name: "MovieList",
  components: {
    PurButton,
    MovieVer,
    BetterScroll,
  },
  props: {
    movieList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //获取是预售还是购票
    getTicketInfo(item) {
      return item.preSale == 0 ? "购票" : "预售";
    },
    //下拉刷新事件
    pullDown() {
      this.$emit("pullDownLoad", 0, 12, this.$store.state.city);
    },
    //上拉加载更多
    pullUp() {
      this.$emit("pullUp");
    },
    //监听图片加载完成
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    //进入详情页
    enterDetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>

<style scoped lang="less">
.film-scroll {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.movie-list-item {
  display: flex;

  div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px 10px;
    font-size: 14px;
    p:nth-of-type(2) {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h2 {
      display: flex;
      align-items: center;
    }
  }
  div:nth-child(3) {
    width: 54px;
    padding-top: 12px;
    i {
      color: #f5b417;
    }
    .wish {
      span {
        font-size: 12px;
      }
    }
    .pur-btn {
      margin-top: 25px;
    }
  }
}
.movie-list {
  padding: 10px 10px 0;
}
</style>