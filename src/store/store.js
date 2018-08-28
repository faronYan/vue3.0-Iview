import Vue from 'vue'
import Vuex from 'vuex'
import userOperating from "./userOperating"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
    plugins: [createPersistedState({
        paths:['userOperating']
    })],
    modules:{
        userOperating,
    }
})
