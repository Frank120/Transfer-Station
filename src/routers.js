/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */

const routers = [{
    path: '/',
    name: 'index',
    component(resolve) {
        require.ensure(['./App.vue'], () => {
            resolve(require('./App.vue'));
        });
    },

    children: [
        {
            path: '/welfare',
            name: 'welfare',
            component(resolve) {
                require.ensure(['./components/welfare/welfare.vue'], () => {
                    resolve(require('./components/welfare/welfare.vue'));
                });
            }
        },
        {
            path: '/day',
            name: 'day',
            component(resolve) {
                require.ensure(['./components/recommend/recommend.vue'], () => {
                    resolve(require('./components/recommend/recommend.vue'));
                });
            },
            meta: { requiresAuth: true }
        },
        {
            path: '/web',
            name: 'web',
            component(resolve) {
                require.ensure(['./components/lists/web.vue'], () => {
                    resolve(require('./components/lists/web.vue'));
                });
            }
        },
        {
            path: '/android',
            name: 'andioid',
            component(resolve) {
                require.ensure(['./components/lists/android.vue'], () => {
                    resolve(require('./components/lists/android.vue'));
                });
            }
        },
        {
            path: '/ios',
            name: 'ios',
            component(resolve) {
                require.ensure(['./components/lists/ios.vue'], () => {
                    resolve(require('./components/lists/ios.vue'));
                });
            },
            meta: {requiresAuth: true}
        }
    ]},
    {
    path: '/wecome',
    name: 'wecome',
    component(resolve) {
        require.ensure(['./components/wecome/wecome.vue'], () => {
            resolve(require('./components/wecome/wecome.vue'));
        });
    }
 }];

export default routers;
