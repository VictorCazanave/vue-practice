<template>
  <div>
    <h3>{{ name }}</h3>
    <p v-if="releaseDate">Release date: {{ releaseDate | formatDate }}</p>
    <img
      v-if="cover.url"
      :src="cover.url"
      :alt="name"/>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Game',
  props: {
    name: {
      type: String,
      required: true,
    },
    first_release_date: {
      type: Number,
      default: null,
    },
    cover: {
      type: Object,
      default: function () {
        return { };
      },
    },
  },
  computed: {
    releaseDate: function () {
      return this.first_release_date ? moment(this.first_release_date) : null;
    },
  },
};
</script>

<style lang="scss">

</style>
