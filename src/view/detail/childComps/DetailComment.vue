<template>
  <div class="detail-comment">
    <div class="detail-comment-hd">观众评论 <span>写短评</span></div>
    <div class="detail-comment-bd">
      <div class="detail-hot-cmt" @click="moreComment">
        <p>热门评论</p>
        <div
          class="detail-comment-main"
          v-for="(item, index) in comments.hcmts"
          :key="index"
        >
          <div class="portrait-container">
            <div class="portrait">
              <img :src="item.avatarurl" alt="" />
            </div>
          </div>
          <div class="main">
            <div class="main-header">
              <div class="user">
                {{ item.nickName }}
              </div>
              <div class="score-star">
                <div
                  class="star-content"
                  :style="{ width: item.score * 20 + '%' }"
                ></div>
              </div>
            </div>
            <div class="main-content">
              {{ item.content }}
            </div>
            <div class="cur-time">
              <div>{{ time(item.time) }}</div>
              <div><i class="iconfont">&#xe6f6;</i>{{ item.approve }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-recent-cmt hided">
        <p>最新评论</p>
        <div
          class="detail-comment-main"
          v-for="(item, index) in comments.cmts"
          :key="index"
        >
          <div class="portrait-container">
            <div class="portrait">
              <img :src="item.avatarurl" alt="" />
            </div>
          </div>
          <div class="main">
            <div class="main-header">
              <div class="user">
                {{ item.nickName }}
              </div>
              <div class="score-star">
                <div
                  class="star-content"
                  :style="{ width: item.score * 20 + '%' }"
                ></div>
              </div>
            </div>
            <div class="main-content">
              {{ item.content }}
            </div>
            <div class="cur-time">
              <div>{{ time(item.time) }}</div>
              <div><i class="iconfont">&#xe6f6;</i>{{ item.approve }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    time() {
      return function val(lastTime) {
        return this.computedTime(lastTime);
      };
    },
  },
  methods: {
    //更多评论
    moreComment() {
      const recentCmt = document.querySelector(".detail-recent-cmt");
      const hotCmt = document.querySelector(".detail-hot-cmt");

      recentCmt.style.display = "block";

      hotCmt.className = "detail-hot-click";
    },
    computedTime(lastTime) {
      const nowDate = +new Date();
      const lastDate = new Date(lastTime);
      let diff = nowDate - lastDate;
      let diffTime = parseInt(diff / 1000 / 60 / 60);
      let agoTime =
        diffTime > 24 ? parseInt(diffTime / 24) + "天前" : diffTime + "小时前";
      return agoTime;
    },
  },
};
</script>

<style scoped lang="less">
.detail-comment {
  margin-top: 12px;
  background-color: #fff;
  .detail-comment-hd {
    display: flex;
    height: 46px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    span {
      width: 73px;
      height: 30px;
      padding: 5px 7px;
      text-align: center;
      border: 1px solid #ff1744;
      border-radius: 31px;
    }
  }
  .detail-comment-bd {
    .detail-hot-cmt,
    .detail-recent-cmt {
      position: relative;
      pointer-events: none;
      .detail-comment-main {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        .portrait-container {
          width: 50px;
          .portrait {
            img {
              margin-top: 22px;
              margin-left: 21px;
              width: 34px;
              height: 34px;
              border-radius: 50%;
            }
          }
        }
        .main {
          flex: 1;
          padding: 20px;
          .main-header {
            height: 40px;
            background-color: #f7f3f3;
          }

          .score-star {
            height: 12px;
            width: 60px;
            background: url("~assets/img/white-star.png");

            .star-content {
              height: 100%;
              background: url("~assets/img/yellow-star.png");
            }
          }
          .cur-time {
            display: flex;
            margin-top: 20px;
            font-size: 12px;
            justify-content: space-between;
          }
        }
      }
    }
    .detail-hot-cmt {
      &::after {
        content: "更多评论";
        position: absolute;
        width: 100%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        pointer-events: auto;
      }
    }
    .hided {
      display: none;
    }
    .detail-hot-click {
      position: relative;
      pointer-events: none;
      &::after {
        content: "更多评论";
        display: none;
        position: absolute;
        width: 100%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        background-color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        pointer-events: auto;
      }
      .detail-comment-main {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        .portrait-container {
          width: 50px;
          .portrait {
            img {
              margin-top: 22px;
              margin-left: 21px;
              width: 34px;
              height: 34px;
              border-radius: 50%;
            }
          }
        }
        .main {
          flex: 1;
          padding: 20px;
          .main-header {
            height: 40px;
            background-color: #f7f3f3;
          }

          .score-star {
            height: 12px;
            width: 60px;
            background: url("~assets/img/white-star.png");

            .star-content {
              height: 100%;
              background: url("~assets/img/yellow-star.png");
            }
          }
          .cur-time {
            display: flex;
            margin-top: 20px;
            font-size: 12px;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>