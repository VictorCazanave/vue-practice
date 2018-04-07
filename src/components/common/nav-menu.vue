<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li class="nav-menu__list__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-menu__list__item">
        <router-link to="search">Search</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // Cannot use Menu because <menu> is an existing HTML tag
  name: 'NavMenu',
};
</script>

<style lang="scss">
.nav-menu {
  &__list {
    padding: 0;
    &__item {
      display: inline-block;
      padding: 10px 20px;
      list-style: none;
    }
  }
}
</style>
