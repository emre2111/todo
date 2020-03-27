import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My ToDo App',
    todos: [
      'Meditieren',
      'Frühstücken',
      'Morgen Übungen',
      'Erste Aufgabe erledigen',
    ],
  },
  getters: {
    countTodos: (state) => state.todos.length,
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push(todo);
    },
    REMOVE_TODO: (state, todo) => {
      state.todos.splice(todo, 1);
    },
    REMOVE_ALL: (state) => {
      state.todos = [];
    },
  },
  actions: {
    removeTodo: (context, todo) => {
      context.commit('REMOVE_TODO', todo);
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          resolve();
        }, 1500);
      });
    },
  },
  modules: {
  },
});
