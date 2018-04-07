<template>
  <page
    :title="game.name"
    :subtitle="game.summary">
    <div>
      <p v-if="fetching">Loading...</p>
      <p v-else-if="error">{{ error }}</p>
      <div v-else>
        <img
          v-if="game.cover.url"
          :src="game.cover.url"
          :alt="game.name"/>
        <p v-if="releaseDate">Release date: {{ releaseDate | formatDate }}</p>
        <ul v-if="game.screenshots.length">
          <li
            v-for="screenshot in game.screenshots"
            :key="screenshot.cloudinary_id">
            <img
              :src="screenshot.url"
              :alt="screenshotAlt"/>
          </li>
        </ul>
      </div>
    </div>
  </page>
</template>

<script>
import moment from 'moment';
import API from '@/api';
import Page from '@/components/common/page';

export default {
  name: 'GamePage',
  components: { Page },
  data: function () {
    return {
      fetching: true,
      game: {},
      error: null,
    };
  },
  computed: {
    releaseDate: function () {
      return this.game.first_release_date ? moment(this.game.first_release_date) : null;
    },
    screenshotAlt: function () {
      return `Screenshot of ${this.game.name}`;
    },
  },
  watch: {
    // Fetch again if the route changes
    $route: 'fetch',
  },
  created: function () {
    this.fetch();
  },
  methods: {
    fetch: function () {
      API.get(this.$route.params.id)
        .then((res) => {
          this.game = res.data[0];
        })
        .catch((err) => {
          this.error = err.response.data;
        })
        .finally(() => {
          this.fetching = false;
        });
    },
  },
};
</script>

<style lang="scss">

</style>
