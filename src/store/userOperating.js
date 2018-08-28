import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    lang:"en"
}
const mutations = {
    setLang(state,lang){
        state.lang = lang;
    }
}
const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
};