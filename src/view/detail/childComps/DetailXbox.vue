<template>
  <div class="detail-xbox" v-if="mboxInfo">
    <div class="detail-xbox-hd">票房</div>
    <div class="detail-xbox-bd">
      <div class="detail-xbox-bd-item">
        <h2>{{ mboxInfo.lastDayRank }}</h2>
        <p>昨日票房排行</p>
      </div>
      <div class="detail-xbox-bd-item">
        <h2>{{ mboxInfo.firstWeekBox }}</h2>
        <p>首周票房（万）</p>
      </div>
      <div class="detail-xbox-bd-item">
        <h2>{{ mboxInfo.sumBox }}</h2>
        <p>累计票房（万）</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailXbox",
  props: {
    mboxInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.detail-xbox {
  height: 105px;
  padding: 10px;
  margin-top: 12px;
  background-color: #fff;
  .detail-xbox-hd {
    height: 20px;
  }
  .detail-xbox-bd {
    display: flex;
    height: calc(100% - 20px);
    align-items: flex-end;
    .detail-xbox-bd-item {
      flex: 1;
      margin-bottom: 10px;
      text-align: center;
      h2 {
        color: #b71c1c;
      }
      p {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>