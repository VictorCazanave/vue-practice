<template>
  <div class="game">
    <h3>{{ name }}</h3>
    <img
      v-if="cover.url"
      :src="cover.url"
      :alt="name"
      class="game__image"/>
    <router-link :to="link">Details</router-link>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cover: {
      type: Object,
      default: function () {
        return { };
      },
    },
  },
  computed: {
    link: function () {
      return { name: 'game', params: { id: this.id } };
    },
  },
};
</script>

<style lang="scss">
.game {
  &__image {
    display: block;
    margin-bottom: 10px;
  }
}
</style>
