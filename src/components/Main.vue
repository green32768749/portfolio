<template>
  <div id="main">
    <article
      :id="this.$store.state.bookmark"
      :class="{ intro: this.$store.state.bookmark === 'home' }"
      class="panel"
    >
      <header v-html="header"></header>

      <a
        @click="$store.commit('go', 'work')"
        v-if="this.$store.state.bookmark === 'home'"
        href="#"
        class="jumplink pic"
      >
        <!-- <span class="arrow icon solid fa-chevron-right">
          <span>看看我的作品</span>
        </span>-->
        <img :src="require('@/images/me.png')" alt />
      </a>

      <section v-if="this.$store.state.bookmark != 'home'">
        <p>
          <span
            class="tab"
            @click="go(tab)"
            :key="tab"
            v-for="tab in Object.keys($store.getters.tabs)"
          >
            <i class="icon fa-star" :class="{ solid : $store.state.tab == tab }"></i>
            {{ $store.getters.tabs[tab].title }}
          </span>
        </p>
        <div class="row">
          <Picture
            :key="index"
            v-for="(index) in $store.getters.targetTab.amount"
            :src="getImageUrl(index, $store.getters.targetType)"
            :click="() => showImg(index)"
          />
          <VueEasyLightbox :index="index" :visible="visible" :imgs="getImages()" @hide="handleHide"></VueEasyLightbox>
        </div>
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
  get header() {
    return this.$store.state.articles[this.$store.state.bookmark].header;
  }

  public visible = false ;
  public index = 0;

  public pad = (num: number) => `0${num}`.slice(-2);

  public getImageUrl(index: number, type: string = 'ori') {
    return require(`@/images/${type}${this.pad(index)}.jpg`);
  }

  public getImages() {
    const images = [];
    for (let i = 1; i <= this.$store.getters.targetTab.amount; i++) {
      images.push(this.getImageUrl(i, this.$store.getters.targetType));
    }
    return images;
  }

  public go(location: string) {
    this.$store.commit('go', location);
  }

  public mounted() {
    this.$store.watch(
      (state) => state.bookmark,
      () => {
        this.panelLazyLoad();
      },
    );
    this.$store.watch(
      (state) => state.tab,
      () => {
        this.imageLazyLoad();
      },
    );
  }

  public panelLazyLoad() {
    const panel = document.getElementsByClassName('panel')[0] as HTMLElement;
    panel.style.visibility = 'hidden';
    setTimeout(() => {
      panel.style.visibility = 'visible';
      panel.classList.add('animated', 'fadeIn');
    }, 250);
  }

  public imageLazyLoad() {
    const images = Array.from(document.getElementsByTagName('img'));
    images.forEach((image) => {
      image.style.visibility = 'hidden';
    });
    setTimeout(() => {
      images.forEach((image) => {
        image.style.visibility = 'visible';
        image.classList.add('animated', 'fadeIn');
      });
    }, 250);
  }

  public showImg(index: number) {
    // v-for range will start with 1;
    this.index = index - 1;
    this.visible = true;
  }

  public handleHide() {
    this.visible = false ;
   }
}
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.tab {
  cursor: pointer;
  margin-right: 1vw;
}
</style>