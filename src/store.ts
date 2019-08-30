import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: 'home',
    articles: {
      home: {
        header:
          `<h1>綠綠</h1>
           <p>委託 / 設計 / 人設</p>`,
      },
      work: {
        header: '<h2>作品</h2>',
      },
    },
    imageDir: '../images/',
    gallery: [
      'pic01.jpg', 'pic02.jpg', 'pic03.jpg',
    ],
  },
  mutations: {
    go(state, location) {
      state.current = location;
    },
  },
  actions: {},
});
