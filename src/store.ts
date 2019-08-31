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
           <p>委託可以透過 fb 私訊我 <3</p>`,
      },
      work: {
        header: '<h2>作品</h2>',
      },
    },
    imageDir: '@/images/',
    gallery: {
      commission: {
        format: 'com{}.jpg',
        amount: 14,
      },
      original: {
        format: 'ori{}.jpg',
        amount: 1,
      },
      secondCreation: {
        format: 'sec{}.jpg',
        amount: 1,
      },
    },
  },
  mutations: {
    go(state, location) {
      state.current = location;
    },
  },
  actions: {},
});
