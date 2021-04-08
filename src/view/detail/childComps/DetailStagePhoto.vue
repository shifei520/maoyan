<template>
  <div class="detail-album">
    <div class="detail-album-hd">图集</div>
    <ul class="detail-album-bd">
      <li v-for="(item, index) in album" :key="index">
        <img :src="item | wh(120.104)" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailStagePhoto",
  props: {
    album: {
      type: Array,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.detail-album {
  height: 162px;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  .detail-album-hd {
    height: 20px;
  }
  ul.detail-album-bd {
    margin-top: 15px;
    white-space: nowrap;
    overflow-x: auto;
    li {
      display: inline-block;
      list-style: none;
      &:nth-child(n + 2) {
        margin-left: 10px;
      }
    }
  }
}
</style>