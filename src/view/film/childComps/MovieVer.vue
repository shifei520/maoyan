<template>
  <div class="movie-ver">
    <div class="imax3d" :class="{ imaxbor: is3D && isImax }" v-show="is3D">
      <i>{{ is3D }}</i
      >{{ isImax }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieVer",
  data() {
    return {
      is3D: "",
      isImax: "",
    };
  },
  props: {
    ver: {
      type: String,
      default() {
        return "";
      },
    },
  },
  mounted() {
    //确定电影的观看版本 3D/2D

    let reg = new RegExp("(3D)|(IMAX)", "gi");
    let arr = this.ver.match(reg);
    if (arr) {
      this.is3D = arr.find((item) => item == "3D");
      this.isImax = arr.find((item) => item == "IMAX");
    }

    this.is3D == undefined ? (this.is3D = "") : this.is3D;
    this.isImax == undefined ? (this.isImax = "") : this.isImax;
  },
};
</script>

<style lang="less" scoped>
.movie-ver {
  margin-left: 5px;
  .imax3d {
    width: 50px;
    height: 15px;
    font-size: 10px !important;
    border-radius: 2px;
    i {
      background-color: #acc3ce;
      border-radius: 2px;
      color: #fff;
    }
  }
}

.imaxbor {
  border: 1px solid #acc3ce;
}
</style>