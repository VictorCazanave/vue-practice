<template>
  <page
    title="Search"
    subtitle="Search for video games using IGBD.com API.">
    <div class="search-page">
      <form
        class="search-page__form"
        @submit.prevent="search">
        <input
          v-model="input"
          class="search-page__form__input"
          type="search"/>
      </form>
      <p v-if="fetching">
        Searching...
      </p>
      <div v-else-if="fetched">
        <p
          v-if="error"
          class="search-page__error">
          {{ error }}
        </p>
        <ul
          v-else-if="games.length"
          class="search-page__results">
          <li
            v-for="game in games"
            :key="game.id"
            class="search-page__results__item">
            <game v-bind="game"/>
          </li>
        </ul>
        <p v-else>
          No game found.
        </p>
      </div>
    </div>
  </page>
</template>

<script>
import API from '@/api';
import Page from '@/components/common/page';
import Game from '@/components/search/game';

export default {
  name: 'SearchPage',
  components: { Page, Game },
  data: function () {
    return {
      input: null,
      games: [],
      error: null,
      fetching: false,
      fetched: false,
    };
  },
  watch: {
    $route: function () {
      const name = this.$route.params.name;
      if (name) {
        this.input = name;
        this.fetch(name);
      }
    },
  },
  created: function () {
    const name = this.$route.params.name;
    if (name) {
      this.input = name;
      this.fetch(name);
    }
  },
  methods: {
    search: function () {
      const name = this.input;
      if (name) {
        this.$router.push({ name: 'search', params: { name } });
        this.fetch(name);
      }
    },
    fetch: function (name) {
      this.fetching = true;
      this.fetched = false;
      API.search(name)
        .then((res) => {
          this.games = res.data;
          // Store games
          this.$store.commit('addGames', this.games);
        })
        .catch((err) => {
          this.error = err.response.data;
        })
        .finally(() => {
          this.fetching = false;
          this.fetched = true;
        });
    },
  },
};
</script>

<style lang="scss">
.search-page {
  &__form {
    margin-bottom: 40px;

    &__input {
      padding: 5px 10px;
    }
  }

  &__results {
    padding: 0;
    text-align-last: left;
    list-style: none;

    &__item {
      padding: 0 0 20px;
      border-bottom: 1px solid grey;

      &:first-child {
        border-top: 1px solid grey;
      }
    }
  }

  &__error {
    color: red;
  }
}
</style>
