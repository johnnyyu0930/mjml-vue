import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeElements: [],
    selectedElementIndex: ''
  },
  mutations: {
    [types.SET_ACTIVE_ELEMENTS](state, data) {
      state.activeElements = data;
    },
    [types.SET_ACTIVE_ELEMENT_INDEX](state, idx) {
      state.selectedElementIndex = idx;
    },
    [types.SET_ACTIVE_ELEMENT](state, data) {
      state.activeElements[state.selectedElementIndex].settings = { ...state.activeElements[state.selectedElementIndex].settings, ...data}
    }
  },
  getters: {
    getSelectedElement(state) {
      return state.activeElements[state.selectedElementIndex];
    }
  },
  actions: {},
});
