import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    city: "合肥",
    id: 56,
  },
  mutations: {
    getCity(state, payload) {
      state.city = payload.city;
      state.id = payload.id;
    },
  },
  actions: {
    changeCity(context, payload) {
      context.commit("getCity", payload);
    },
  },
});

export default store;
