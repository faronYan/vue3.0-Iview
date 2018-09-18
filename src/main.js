import Vue from 'vue'
import router from './router'
import store from './store/store'
import iView from 'iview';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';
import {mapGetters, mapActions, mapState, mapMutations} from 'vuex'
import echarts from 'echarts';
import App from './App.vue'
import VueI18n from 'vue-i18n';
import en from '@/Language/en';
import zh from '@/Language/zh';

Vue.use(VueI18n);
Vue.use(iView);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts; /*注入*/
/*设置默认语言*/
Vue.config.lang = store.state.userOperating.lang || 'en';
const messages = {
    en,
    zh
};
const i18n = new VueI18n({
    locale: Vue.config.lang,  // set locale
    messages  // set locale messages
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app')
