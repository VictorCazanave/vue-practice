<template>
  <div class="app">
    <h1 class="app__title">Vue.js practice</h1>
    <nav-menu/>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/common/nav-menu';

export default {
  name: 'App',
  components: { NavMenu },
};
</script>

<style lang="scss">
.app {
  padding-top: 30px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;

  &__title {
    margin-bottom: 60px;
  }
}
</style>
