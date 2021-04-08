<template>
  <div class="city-list-pick" v-if="cityMenu">
    <div class="now-city">
      <div class="now-city-hd">定位城市</div>
      <div class="now-city-bd">
        <span class="locate-city">
          {{ cityMenu.geoCity.chineseFullnm }}
        </span>
      </div>
    </div>

    <div class="city-lists-order">
      <van-index-bar :sticky="false">
        <div
          class="city-letter-mode"
          v-for="(value, key, index) in cityMenu.letterMap"
          :key="index"
        >
          <van-index-anchor :index="key" class="city-letter-hd" />
          <!-- <div class="city-letter-hd">{{ key }}</div> -->
          <div class="city-letter-bd">
            <ul>
              <li
                v-for="(item, index) in value"
                :key="index"
                @click="handleCityClick(item)"
              >
                {{ item.chineseFullnm }}
              </li>
            </ul>
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
//引用indexnav索引栏
import Vue from "vue";
import { IndexBar, IndexAnchor } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
  name: "CityList",
  props: {
    cityMenu: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  methods: {
    handleCityClick(item) {
      console.log(item);
      this.$store.dispatch("changeCity", {
        city: item.nm,
        id: item.id,
      });
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
.city-list-pick {
  margin-top: 44px;
  .now-city {
    height: 100px;
    .now-city-hd {
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      background-color: rgb(235, 235, 235);
    }
    .now-city-bd {
      display: flex;
      height: 100%;
      padding-left: 10px;
      align-items: center;
      background-color: rgb(245, 245, 245);
      .locate-city {
        display: block;
        width: 110px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #eee;
        background-color: #fff;
      }
    }
  }
  .city-letter-mode {
    margin-top: 30px;
    .city-letter-hd {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      background-color: rgb(235, 235, 235);
    }
    .city-letter-bd {
      padding: 0 10px;
      ul > li {
        height: 47px;
        line-height: 47px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>