<template>
  <div
    class="detail-film-info"
    :style="{ background: headerInfo.backgroundColor }"
    v-if="headerInfo"
  >
    <div class="detail-film-info-hd">
      <div class="celeInfo-left" @click="playMovie">
        <img :src="headerInfo.img | wh(123.166)" alt="" />
      </div>
      <div class="celeInfo-right">
        <h4>{{ headerInfo.nm }}</h4>
        <h4>{{ headerInfo.enm }}</h4>
        <div class="film-score">
          <div class="star">
            <div
              class="star-content"
              :style="{ width: headerInfo.sc * 10 + '%' }"
            ></div>
          </div>
          <span>{{ headerInfo.sc }}</span>
        </div>
        <i class="cmt-sum"
          >({{ (headerInfo.snum / 10000).toFixed(1) }}万人评)</i
        >
        <p>{{ headerInfo.cat }}</p>
        <p>{{ headerInfo.src }}/{{ headerInfo.dur }}分钟</p>
        <p>{{ headerInfo.pubDesc }}</p>
      </div>
    </div>
    <div class="detail-film-info-bd">
      <div class="wish-click">
        <i class="iconfont">&#xe82a;</i>
        <div>想看</div>
      </div>
      <div class="comment-click">
        <i class="iconfont">&#xe639;</i>
        <div>评分</div>
      </div>
    </div>
    <video :src="headerInfo.videourl" controls class="film-video"></video>
    <div class="close-video" @click="close">
      <i class="iconfont">&#xe662;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  props: {
    headerInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    this.$bus.$on("headerClose", () => {
      this.close();
    });
  },
  methods: {
    playMovie() {
      const vio = document.querySelector(".film-video");
      const close = document.querySelector(".close-video");
      vio.style.display = "block";
      close.style.display = "block";
      vio.play();
      this.$bus.$emit("closeBtn", "block");
    },
    close() {
      const vio = document.querySelector(".film-video");
      const close = document.querySelector(".close-video");
      vio.pause();
      vio.style.display = "none";
      close.style.display = "none";
    },
  },
};
</script>

<style scoped lang="less">
.detail-film-info {
  height: 240px;
  .detail-film-info-hd {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 180px;
    .celeInfo-left {
      pointer-events: none;
      &::after {
        content: "\e60a";
        position: absolute;
        font-family: "iconfont";
        top: 56px;
        left: 55px;
        font-size: 50px;
        color: rgba(255, 255, 255, 0.85);
        -webkit-text-stroke: 1px #000;
        pointer-events: auto;
      }
    }
    .celeInfo-right {
      display: flex;
      height: 166px;
      flex-direction: column;
      justify-content: space-between;
      h4 {
        color: #fff;
      }
      h4:nth-child(1) {
        margin-top: 10px;
      }
      h4:nth-child(2) {
        margin-top: -10px;
      }
      .film-score {
        display: flex;
        .star {
          height: 12px;
          width: 60px;
          background: url("~assets/img/white-star.png");
          .star-content {
            height: 100%;
            background: url("~assets/img/yellow-star.png");
          }
        }
        span {
          color: rgb(255, 198, 0);
        }
      }
      p,
      .cmt-sum {
        color: #c1b7b7;
      }
      .cmt-sum {
        margin-top: -7px;
        font-size: 10px;
      }
    }
  }
  .detail-film-info-bd {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;

    .wish-click,
    .comment-click {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 34px;
      color: #fff;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.35);
      div {
        margin-left: 5px;
      }
    }
  }
  .film-video {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 240px;
    background-color: #000;
  }
  .close-video {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    .iconfont {
      font-size: 30px;
    }
    color: #fff;
  }
}
</style>