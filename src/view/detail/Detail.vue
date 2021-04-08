<template>
  <div class="detail" v-if="detailInfo">
    <nav-top-bar class="detail-nav-bar">
      <div slot="left" @click="goback"><i class="iconfont">&#xe66a;</i></div>
      <div slot="center">影片详情</div>
    </nav-top-bar>

    <detail-header :headerInfo="detailInfo" />
    <div class="close_video_1" @click="close">关闭视频</div>
    <deatil-intro :introduction="detailInfo.dra" />
    <detail-cele :celebrities="celebrities" />
    <detail-xbox :mboxInfo="boxInfo" />
    <detail-stage-photo :album="detailInfo.photos" />
    <detail-comment :comments="comments" />
    <detail-footer />
    <div class="box-shade"></div>
  </div>
</template>

<script>
import NavTopBar from "components/common/navTopBar/NavTopBar.vue";
//获取数据
import {
  getDetailData,
  getCelebrities,
  mbox,
  getComments,
} from "network/detail";
import DetailHeader from "./childComps/DetailHeader.vue";
import DeatilIntro from "./childComps/DeatilIntro.vue";
import DetailCele from "./childComps/DetailCele.vue";
import DetailXbox from "./childComps/DetailXbox.vue";
import DetailStagePhoto from "./childComps/DetailStagePhoto.vue";
import DetailComment from "./childComps/DetailComment.vue";
import DetailFooter from "./childComps/DetailFooter.vue";
export default {
  name: "Detail",
  components: {
    NavTopBar,
    DetailHeader,
    DeatilIntro,
    DetailCele,
    DetailXbox,
    DetailStagePhoto,
    DetailComment,
    DetailFooter,
  },
  data() {
    return {
      detailInfo: null,
      celebrities: [],
      boxInfo: null,
      limit: 3,
      comments: {},
    };
  },
  created() {
    this.getDetailItemData();
    //优惠购票按钮监控
    this.$bus.$on("openBox", (value) => {
      const box_shade = document.querySelector(".box-shade");
      box_shade.style.display = value;
    });
    //放映视屏按钮监控
    this.$bus.$on("closeBtn", (value) => {
      const close_video_1 = document.querySelector(".close_video_1");
      close_video_1.style.display = value;
    });
  },
  methods: {
    goback() {
      this.$router.back();
    },
    getDetailItemData() {
      getDetailData(this.$route.params.id, this.$store.state.id).then((res) => {
        // console.log(res);
        this.detailInfo = res.data.data.movie;
      });
      getCelebrities(this.$route.params.id).then((res) => {
        // console.log(res);
        this.celebrities = res.data.data.splice(0, 2);
      });
      //票房排名信息
      mbox(this.$route.params.id).then((res) => {
        // console.log(res);
        this.boxInfo = res.data.mbox;
      });
      getComments(this.$route.params.id, this.limit).then((res) => {
        // console.log(res);
        this.comments = res.data;
      });
    },
    close() {
      const close_video_1 = document.querySelector(".close_video_1");
      close_video_1.style.display = "none";
      //向子组件传递事件，需要关系视频
      this.$bus.$emit("headerClose");
    },
  },
};
</script>

<style scoped lang="less">
.detail {
  position: absolute;
  width: 100%;
  padding-bottom: 94px;
  background-color: #eee;
  overflow-y: scroll;
  .detail-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: #fff;
  }
  .close_video_1 {
    display: none;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: rgb(170, 70, 70);
  }
  .box-shade {
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>