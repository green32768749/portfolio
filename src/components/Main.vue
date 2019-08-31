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
        <!-- <span class="arrow icon solid fa-chevron-right">
          <span>看看我的作品</span>
        </span>-->
        <img :src="require('@/images/me.png')" alt />
      </a>

      <p v-if="this.$store.state.current == 'work'">委託</p>
      <section v-if="this.$store.state.current == 'work'">
        <div class="row">
          <Picture
            :key="key"
            v-for="(key) in this.$store.state.gallery.commission.amount"
              :src="require(`@/images/com${pad(key)}.jpg`)"
          />
        </div>
      </section>
      <p v-if="this.$store.state.current == 'work'">原創</p>
      <section v-if="this.$store.state.current == 'work'">
        <div class="row">
          <Picture
            :key="key"
            v-for="(key) in this.$store.state.gallery.original.amount"
              :src="require(`@/images/ori${pad(key)}.jpg`)"
          />
        </div>
      </section>
      <p v-if="this.$store.state.current == 'work'">二創</p>
      <section v-if="this.$store.state.current == 'work'">
        <div class="row">
          <Picture
            :key="key"
            v-for="(key) in this.$store.state.gallery.secondCreation.amount"
              :src="require(`@/images/sec${pad(key)}.jpg`)"
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
    return this.$store.state.articles[this.$store.state.current].header;
  }

  public pad = (num: number) => `0${num}`.slice(-2);

  public mounted() {
    this.$store.watch(
      (state) => state.current,
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
</style>