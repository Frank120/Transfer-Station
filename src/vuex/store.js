import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as uz from '../common/js/uz';

Vue.use(Vuex);

const state = {
    'headerTitle': 'BETTER MAN',
    'menus': uz.NAME_TITILE,
    'menuShow': false,
    'loadingShow': false,
    'news': 7
};

const mutations = {
    UPDATE_TITLE(state, title) {
        console.log(title);
        state.headerTitle = title;
    },
    UPDATE_MENUSHOW(state) {
        state.menuShow = !state.menuShow;
    },
    UPDATE_LOADING(state, data) {
        state.loadingShow = data;
    },
    UPDATE_NEWS(state) {
        state.news = 0;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
