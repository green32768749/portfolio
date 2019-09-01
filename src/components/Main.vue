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
            :key="key"
            v-for="(key) in $store.getters.targetTab.amount"
            :src="getImageUrl(key, $store.getters.targetType)"
          />
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Picture from './Picture.vue';

@Component({
  components: {
    Picture,
  },
})
export default class Main extends Vue {
  get header() {
    return this.$store.state.articles[this.$store.state.bookmark].header;
  }

  public pad = (num: number) => `0${num}`.slice(-2);

  public getImageUrl(key: number, type: string = 'ori') {
    return require(`@/images/${type}${this.pad(key)}.jpg`);
  }

  public go(location: string) {
    this.$store.commit('go', location);
  }

  public mounted() {
    this.$store.watch(
      (state) => state.bookmark,
      () => {
        const panel = document.getElementsByClassName(
          'panel',
        )[0] as HTMLElement;
        panel.style.visibility = 'hidden';
        setTimeout(() => {
          panel.style.visibility = 'visible';
          panel.classList.add('animated', 'fadeIn');
        }, 250);
      },
    );
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