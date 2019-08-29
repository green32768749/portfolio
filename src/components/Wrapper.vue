<template>
  <div id="wrapper">
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from './Nav.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

@Component({
  components: {
    Nav,
    Main,
    Footer,
  },
})

export default class Wrapper extends Vue {}
</script>

<style>
</style>