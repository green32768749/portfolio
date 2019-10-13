import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmark: 'home',
    tab: 'original',
    current: {
      images: [],
    },
    nav: {
      home: {
        name: '首頁',
        icon: 'solid fa-home',
      },
      work: {
        name: '作品',
        icon: 'solid fa-cat',
      },
      commission: {
        name: '委託',
        icon: 'solid fa-fish',
      },
      plan: {
        name: '企劃',
        icon: 'solid fa-cookie-bite',
      },
      facebook: {
        name: 'Facebook',
        icon: 'brands solid fa-facebook-square',
        link: 'https://www.facebook.com/people/Lin-Lynn/100010045894625',
      },
      plurk: {
        name: 'Plurk',
        icon: 'solid fa-parking',
        link: 'https://www.plurk.com/ki23872902',
      },
    },
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
        tab: {
          original: {
            title: '原創',
          },
          secondCreation: {
            title: '二創',
          },
        },
      },
      commission: {
        header: '<h2>委託</h2>',
        tab: {
          price: {
            title: '價格',
          },
          example: {
            title: '範例',
          },
        },
      },
      plan: {
        header: '<h2>企劃</h2>',
        tab: {
          planPicture: {
            title: '企劃圖',
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
      return state.articles[state.bookmark].tab[state.tab];
    },
    tabs: (state: any) => {
      return state.articles[state.bookmark].tab;
    },
  },
  mutations: {
    go(state: any, location) {
      if (Object.keys(state.articles).includes(location)) {
        if (state.bookmark !== location) {
          state.bookmark = location;
          // resetTab
          if (state.bookmark !== 'home') {
            state.tab = Object.keys(state.articles[state.bookmark].tab)[0];
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
