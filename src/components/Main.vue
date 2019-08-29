<template>
  <div id="main">
    <article :id="this.$store.state.current" class="panel intro">
      <header v-html="header"></header>
      <span v-html="content"></span>
      <section>
        <div class="row">
          <Picture />
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

  get content() {
    return this.$store.state.articles[this.$store.state.current].content;
  }
}
</script>

<style>
</style>