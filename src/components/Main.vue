<template>
  <div id="main">
    <article
      v-if="panelShow"
      :id="this.$store.state.bookmark"
      :class="{ intro: this.$store.state.bookmark === 'home' }"
      class="panel"
    >
      <header v-html="$store.getters.bookmark.header"></header>

      <a
        @click="$store.commit('go', 'work')"
        v-if="this.$store.state.bookmark === 'home'"
        href="#"
        class="jumplink pic"
      >
        <img :src="require('@/images/me.png')" alt />
      </a>

      <section v-if="this.$store.state.bookmark != 'home'">
        <p>
          <span
            class="tab"
            @click="go(tab)"
            :key="tab"
            v-for="tab in Object.keys($store.getters.bookmark.tabs)"
          >
            <i
              class="icon fa-star"
              :class="{ solid: $store.state.tab == tab }"
            ></i>
            {{ $store.getters.bookmark.tabs[tab].title }}
          </span>
        </p>
        <transition name="fade">
          <div class="row" v-if="imageShow">
            <Picture
              :key="index"
              v-for="(item, index) in $store.state.current.images"
              :src="item[1]"
              :click="() => showAlbum(index)"
            />
          </div>
        </transition>
        <VueEasyLightbox
          :index="index"
          :visible="albumShow"
          :imgs="getImages()"
          @hide="
            () => {
              this.albumShow = false;
            }
          "
        ></VueEasyLightbox>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
import Picture from './Picture.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

@Component({
  components: {
    Picture,
    VueEasyLightbox,
  },
})
export default class Main extends Vue {
  public panelShow = true;
  public imageShow = true;
  public albumShow = false;
  public index = 0;

  public getImages() {
    return this.$store.state.current.images.map((item: any[]) => {
      return item[1];
    });
  }

  public go(location: string) {
    this.$store.commit('go', location);
  }

  public mounted() {
    this.loadImage();
    this.$store.watch(
      (state) => state.tab,
      () => {
        this.loadImage();
      },
    );
  }

  public showAlbum(index: number) {
    this.index = index;
    this.albumShow = true;
  }

  public loadImage(key: string = 'QAZQAZWFR@R') {
    const loader = this.$loading.show();
    this.imageShow = false;

    const tab = this.$store.getters.safeTab;
    let name = '原創';
    if (tab) {
      name = tab.title;
    }
    fetch(
      `https://script.google.com/macros/s/AKfycbx2nKhxh5IiPSkI6dsAxNtyRN67wvpAmnK4WETy15BcRJ2VhdHC/exec?key=${key}&name=${name}`,
    )
      .then((res) => res.json())
      .then((jsonArr) => {
        this.$store.state.current.images = jsonArr;
        this.imageShow = true;
        loader.hide();
      });
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

.tab {
  cursor: pointer;
  margin-right: 1vw;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style> 