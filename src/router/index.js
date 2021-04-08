import Vue from "vue";
import VueRouter from "vue-router";

// 路由懒加载

const Film = () => import("view/film/Film");
const Cinema = () => import("view/cinema/Cinema");
const Mine = () => import("view/mine/Mine");
const ChaseCitys = () => import("view/citys/ChaseCitys");
const Detail = () => import("view/detail/Detail");
//film页面的子路由
const HotShow = () => import("view/film/childRoutes/HotShow");
const WillShow = () => import("view/film/childRoutes/WillShow");

const routes = [
  {
    path: "/",
    redirect: "/film",
  },
  {
    path: "/film",
    component: Film,
    redirect: "/film/hotshow",
    children: [
      {
        path: "hotshow",
        component: HotShow,
      },
      {
        path: "willshow",
        component: WillShow,
      },
    ],
  },
  { path: "/cinema", component: Cinema },
  { path: "/mine", component: Mine },
  { path: "/citys", component: ChaseCitys },
  { path: "/detail/:id", component: Detail },
];
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
