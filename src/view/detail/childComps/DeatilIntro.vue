<template>
  <div
    class="detail-intro"
    v-if="introduction"
    @click="isFold"
    :style="{ height: isfold == true ? '100px' : 'auto' }"
  >
    {{ introduction }}
    <div class="iconfont fold" v-if="isfold">&#xe686;</div>
    <div class="iconfont fold" v-else>&#xe685;</div>
  </div>
</template>

<script>
export default {
  name: "DeatilIntro",
  props: {
    introduction: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      isfold: true,
    };
  },
  methods: {
    isFold() {
      this.isfold = !this.isfold;
    },
  },
};
</script>

<style scoped lang="less">
.detail-intro {
  position: relative;
  padding: 14px 20px;
  margin-top: 10px;
  line-height: 24px;
  overflow: hidden;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  .fold {
    position: absolute;
    bottom: 0;
    width: calc(100% - 40px);
    height: 14px;
    line-height: 14px;
    text-align: center;
    background-color: #fff;
  }
}
</style>