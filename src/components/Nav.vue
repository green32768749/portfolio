<template>
  <nav id="nav">
    <a
      v-for="(value, key) in $store.state.nav"
      :key="key"
      @click="value.link ? null : go(key)"
      :href="value.link ? value.link : '#'"
      :target="value.link ? '_blank' : null"
      :class="[{ active: $store.state.bookmark === key }, 'icon ' + value.icon]"
      aria-hidden="true"
    >
      <span>{{ value.name }}</span>
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  public go(location: string) {
    this.$store.commit('go', location);
  }
}
</script>

<style>
</style>