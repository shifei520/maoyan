<template>
  <div class="bottom-bar">
    <nav-bottom-bar :path="path" ref="mainBar">
      <div slot="left" @click="btnClick(0)">
        <span class="iconfont">&#xe6ee;</span>
        <p>电影</p>
      </div>
      <div slot="center" @click="btnClick(1)">
        <span class="iconfont">&#xe60f;</span>
        <p>影院</p>
      </div>
      <div slot="right" @click="btnClick(2)">
        <span class="iconfont">&#xe8c0;</span>
        <p>我的</p>
      </div>
    </nav-bottom-bar>
  </div>
</template>

<script>
import NavBottomBar from "components/common/navBottomBar/NavBottomBar.vue";
export default {
  name: "BottomBar",
  data() {
    return {
      path: "",
      paths: ["/film", "/cinema", "/mine"],
      classes: ["nowStyle1", "nowStyle2", "nowStyle3"],
    };
  },
  components: { NavBottomBar },
  mounted() {
    this.$refs.mainBar.$el.children[0].style.color = "red";
  },
  methods: {
    btnClick(num) {
      this.path = this.paths[num];
      for (let i = 0; i < this.paths.length; i++) {
        this.$refs.mainBar.$el.children[i].style.color = "";
      }
      this.$refs.mainBar.$el.children[num].style.color = "red";
      // console.log(this.$route);
      // this.paths.some((item, index) => {
      //   if (this.$route.path == item) {
      //     console.log(item);
      //   }
      // });
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont";
  src:
    url("~assets/icon/iconfont.woff") format("woff"),
    url("~assets/icon/iconfont.ttf") format("truetype"),
    
}
.iconfont {
  font-family: iconfont;
  font-size: 20px;
}
.nowStyle1 {
  color: rgb(220, 63, 58);
}
.nowStyle2 {
  color: rgb(220, 63, 58);
}
.nowStyle3 {
  color: rgb(220, 63, 58);
}
</style>