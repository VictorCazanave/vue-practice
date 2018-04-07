<template>
  <div class="page">
    <h2 class="page__title">{{ title }}</h2>
    <p class="page__subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 80px;

  &__subtitle {
    margin-bottom: 40px;
  }
}
</style>
