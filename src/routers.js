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
