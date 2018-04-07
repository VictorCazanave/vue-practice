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
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.page {
  &__title {
  }
  &__subtitle {
    margin-bottom: 40px;
  }
}
</style>
