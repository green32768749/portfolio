<template>
  <div id="main">
    <transition name="fade">
      <article
        v-if="panelShow"
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
              <i
                class="icon fa-star"
                :class="{ solid: $store.state.tab == tab }"
              ></i>
              {{ $store.getters.tabs[tab].title }}
            </span>
          </p>
          <transition name="fade">
            <div class="row" v-if="imageShow">
              <Picture
                :key="index"
                v-for="index in $store.getters.targetTab.amount"
                :src="getImageUrl(index, $store.getters.targetType)"
                :click="() => showImg(index)"
              />
            </div>
          </transition>
          <VueEasyLightbox
            :index="index"
            :visible="visible"
            :imgs="getImages()"
            @hide="handleHide"
          ></VueEasyLightbox>
        </section>
      </article>
    </transition>
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

  public panelShow = true;
  public imageShow = true;

  public visible = false;
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
        this.panelShow = false;
        setTimeout(() => {
          this.panelShow = true;
        });
        // this.panelGrow();
      },
    );
    this.$store.watch(
      (state) => state.tab,
      () => {
        this.imageShow = false;
        setTimeout(() => {
          this.imageShow = true;
        });
      },
    );
  }

  public panelGrow() {
    // not work yet
    const panel = document.getElementsByClassName('panel')[0] as HTMLElement;
    const computedPanel = getComputedStyle(panel);
    const height = computedPanel.height;

    setTimeout(() => {
      panel.style.height = height;
    });
  }

  public showImg(index: number) {
    // v-for range will start with 1;
    this.index = index - 1;
    this.visible = true;
  }

  public handleHide() {
    this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

.tab {
  cursor: pointer;
  margin-right: 1vw;
}

.fade-leave-to, .fade-enter {
  opacity: 0;
}
.fade-leave-active, .fade-enter-active {
  transition: opacity 2s;
}
.fade-leave , .fade-enter-to {
  opacity: 1;
}
</style> 