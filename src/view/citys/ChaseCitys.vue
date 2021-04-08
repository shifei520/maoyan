<template>
  <div class="city-pick">
    <nav-top-bar class="city-nav-bar">
      <div slot="left" @click="goback"><i class="iconfont">&#xe66a;</i></div>
      <div slot="center">当前区域</div>
    </nav-top-bar>
    <city-list :cityMenu="citiesList" />
  </div>
</template>

<script>
import NavTopBar from "components/common/navTopBar/NavTopBar.vue";
//引入城市信息
import { cityPicker } from "network/cities.js";

//引入城市列表组件
import CityList from "./CityList.vue";
export default {
  name: "ChaseCitys",
  data() {
    return {
      citiesList: null,
    };
  },
  components: {
    NavTopBar,
    CityList,
  },
  created() {
    this.getCities();
  },
  methods: {
    goback() {
      this.$router.back();
    },
    getCities() {
      cityPicker().then((res) => {
        this.citiesList = res.data;
      });
    },
  },
};
</script>

<style scoped lang="less">
.city-pick {
  .city-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
  }
}
.iconfont {
  color: #fff;
  font-size: 16px;
  margin-left: 25px;
}
</style>