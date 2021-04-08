<template>
  <div class="banner-bar">
    <div class="city" @click="citysOpt">{{ monitorCity }}</div>
    <div class="show">
      <router-link tag="span" to="/film/hotshow" active-class="active"
        >热映</router-link
      >
      <router-link tag="span" to="/film/willshow" active-class="active"
        >待映</router-link
      >
    </div>
    <div class="search"><i class="iconfont">&#xe61f;</i></div>
  </div>
</template>

<script>
export default {
  name: "BannerBar",
  data() {
    return {
      nowCity: "合肥",
    };
  },
  computed: {
    monitorCity() {
      return this.$store.state.city;
    },
  },
  methods: {
    citysOpt() {
      this.$router.push("/citys");
    },
  },
};
</script>

<style scoped lang="less">
.banner-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #eee;
  .city {
    position: relative;
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      right: -1px;
      width: 0;
      height: 0;
      border: 5px solid #000;
      border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
    }
  }
  .show {
    flex: 1;
    display: flex;
    justify-content: center;
    span {
      padding: 0 8px;
    }
    span:first-child {
      margin-right: 35px;
    }
    .active {
      color: rgb(220, 63, 58);
      border-bottom: 2px solid rgb(220, 63, 58);
    }
  }
  .search {
    width: 40px;
    border-left: 1px solid #eee;
    color: rgb(220, 63, 58);
    i {
      font-size: 22px;
    }
  }
}
</style>