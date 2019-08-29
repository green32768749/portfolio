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
        content: `<a href="#work" class="jumplink pic">
        <span class="arrow icon solid fa-chevron-right">
          <span>看看我的作品</span>
        </span>
        <img src="images/me.jpg" alt />
      </a>`,
      },
      work: {
        header: '<h2>作品</h2>',
        content: '<p>這邊可以排很多文字....</p>',
      },
    },
    gallery: {
      img1: '',
    },
  },
  mutations: {},
  actions: {},
});
