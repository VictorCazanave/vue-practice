import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint import/prefer-default-export: off */
export default new Vuex.Store({
  state: {
    games: {},
  },
  mutations: {
    addGame: function (state, game) {
      state.games[game.id] = game;
    },
    addGames: function (state, games) {
      for (let i = 0; i < games.length; i += 1) {
        // this.mutations.addGame(state, games[i]);
        const game = games[i];
        state.games[game.id] = game;
      }
    },
  },
});
