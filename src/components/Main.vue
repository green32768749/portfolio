<template>
  <div id="main">
    <article
      :id="this.$store.state.current"
      :class="{ intro: this.$store.state.current == 'home' }"
      class="panel"
    >
      <header v-html="header"></header>
      <a
        @click="$store.commit('go', 'work')"
        v-if="this.$store.state.current == 'home'"
        href="#"
        class="jumplink pic"
      >
        <span class="arrow icon solid fa-chevron-right">
          <span>看看我的作品</span>
        </span>
        <img :src="require('../images/me.jpg')" alt />
      </a>

      <p v-if="this.$store.state.current == 'work'">這邊可以排很多文字....</p>
      <section v-if="this.$store.state.current == 'work'">
        <div class="row">
          <Picture
            :key="key"
            v-for="(img, key) in this.$store.state.gallery"
            :src="require('../images/' + img)"
          />
          <!-- for loop -->
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
    return this.$store.state.articles[this.$store.state.current].header;
  }

  public imageDir = '../images';

  public mounted() {
    this.$store.watch(
      (state) => state.current,
      () => {
        const panel = document.getElementsByClassName('panel')[0] as HTMLElement;
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
</style>