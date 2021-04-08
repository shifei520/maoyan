<template>
  <div class="detail-cele">
    <div class="detail-cele-hd">演职人员</div>
    <ul v-if="celebrities">
      <li>
        <img :src="celebrities[0][0].avatar | wh(72.96)" alt="" />
        <h5>{{ celebrities[0][0].cnm }}</h5>
        <div>{{ celebrities[0][0].desc }}</div>
      </li>
      <li v-for="(item, index) in celebrities[1]" :key="index">
        <img :src="item.avatar | wh(72.96)" alt="" />
        <h5>{{ item.cnm }}</h5>
        <div>{{ item.roles }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailCele",
  props: {
    celebrities: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.detail-cele {
  height: 200px;
  padding: 10px;
  margin-top: 14px;
  background-color: #fff;
  .detail-cele-hd {
    margin-bottom: 10px;
  }
  ul {
    width: auto;
    white-space: nowrap;
    overflow-x: auto;
    li {
      display: inline-block;
      &:nth-child(n + 2) {
        margin-left: 10px;
      }
      img {
        width: 72px;
        height: 96px;
      }
      h5,
      div {
        height: 20px;
        line-height: 20px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>