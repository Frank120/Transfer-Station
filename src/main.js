import Vue from 'vue';
import store from './vuex/store';
import VueRouter from 'vue-router';
import routes from './routers';
import vueResource from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll';
import VueLazyload from 'vue-lazyload';
import {loadFromLocal} from './common/js/store';
import 'common/css/index.styl';

// register components
Vue.use(infiniteScroll);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 1
});

const router = new VueRouter({
    'linkActiveClass': 'active',
    routes
});

const routerApp = new Vue({
    store,
    router
}).$mount('#app');


/**
 * loadFromlLocal()是读取本地缓存数据，具体common/js/store.js 查看
 */

if(!loadFromLocal('gank', 'wecome', false)) {
    router.push('./wecome');
}
export default routerApp;
