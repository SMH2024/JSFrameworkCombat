import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import initialState from './initialState';

const state = initialState;

export default createStore({
  state,
  mutations,
  getters
});