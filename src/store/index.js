import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeElements: [],
    selectedElementId: ''
  },
  mutations: {
    [types.SET_ACTIVE_ELEMENTS](state, data) {
      state.activeElements = data;
    },
    [types.SET_ACTIVE_ELEMENT_INDEX](state, idx) {
      state.selectedElementId = idx;
    },
    [types.SET_ACTIVE_ELEMENT](state, data) {
      const elements = state.activeElements.map(el => {
        if (el.id === state.selectedElementId ) {
          el.settings = {...el.settings, ...data}
        }
        return el;
      })
      state.activeElements = elements;
    }
  },
  getters: {
    getSelectedElement(state) {
      return state.activeElements.filter(el => el.id === state.selectedElementId)[0];
    }
  },
  actions: {},
});
