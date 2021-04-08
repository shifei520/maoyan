import Vue from "vue";
import App from "./App.vue";
//引入路由
import router from "./router/index";
//引入less解析器
import Less from "less";
//引入全局过滤器
import filters from "common/filters/img.js";
//引入图片懒加载
import LazyLoad from "vue-lazyload";
//全局引入字体文件
import iconfont from "assets/css/iconfont.css";
//引入vuex
import store from "./store/index";
//引入动画库
import "animate.css";
//引入全局toast
import { Toast } from "vant";

//---------------------------------------------------------分割线（使用方法）
Vue.use(Less);
Vue.use(Toast);
Vue.config.productionTip = false;
//引入全局事件总线
Vue.prototype.$bus = new Vue();

Vue.use(LazyLoad);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
