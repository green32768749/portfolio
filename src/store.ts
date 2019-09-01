import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmark: 'home',
    tab: 'original',
    articles: {
      home: {
        header:
          `<h2>綠綠</h2>
           <br />
           <p>這裡是我家，大部分作品會整理在這裡，感謝各位點開來看 :3
           <br /><br />
           委託可透過 FB . Plurk 聯絡我
           </p>`,
      },
      work: {
        header: '<h2>作品</h2>',
        images: {
          original: {
            title: '原創',
            amount: 1,
          },
          secondCreation: {
            title: '二創',
            amount: 1,
          },
        },
      },
      commission: {
        header: '<h2>委託</h2>',
        images: {
          price: {
            title: '價格',
            amount: 1,
          },
          com: {
            title: '範例',
            amount: 13,
          },
        },
      },
    },
  },
  getters: {
    targetTab: (state: any) => {
      if (state.bookmark === 'home') {
        return;
      }
      return state.articles[state.bookmark].images[state.tab];
    },
    targetType: (state: any) => {
      return state.tab.substring(0, 3);
    },
    tabs: (state: any) => {
      return state.articles[state.bookmark].images;
    },
  },
  mutations: {
    go(state: any, location) {
      if (Object.keys(state.articles).includes(location)) {
        if (state.bookmark !== location) {
          state.bookmark = location;
          // resetTab
          if (state.bookmark !== 'home') {
            state.tab = Object.keys(state.articles[state.bookmark].images)[0];
          }
        }
      } else {
        state.tab = location;
      }
    },
  },
  actions: {

  },
});
