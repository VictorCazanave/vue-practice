<template>
  <page
    title="Search"
    subtitle="Search for video games using IGBD.com API.">
    <div class="search">
      <form
        class="search__form"
        @submit="search">
        <input
          v-model="input"
          class="search__form__input"
          type="search"/>
      </form>
      <p v-if="fetching">
        Searching...
      </p>
      <div v-else-if="fetched">
        <p
          v-if="error"
          class="search__error">
          {{ error }}
        </p>
        <ul
          v-else-if="games.length"
          class="search__results">
          <li
            v-for="game in games"
            :key="game.id"
            class="search__results__item">
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
  methods: {
    search: function () {
      this.fetching = true;
      this.fetched = false;
      API.search(this.input)
        .then((res) => {
          this.games = res.data;
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
.search {
  &__form {
    margin-bottom: 40px;

    &__input {
      padding: 5px 10px;
    }
  }

  &__results {
    padding: 0 40px;
    text-align-last: left;
    list-style: none;

    &__item {
      padding: 0 20px 20px;
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
