import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './rootRoutes';

Vue.use(VueRouter);
/**
 * 创建 VueRouter 实例
 */
function newVueRouter() {
    return new VueRouter({
        // hash 模式不需要设置 base
        base: window.__POWERED_BY_QIANKUN__ ? '/main/home/example/' : '/',
        mode: 'history',
        routes,
    });
}
/**
 * 路由实例对象
 */
let router: VueRouter | null = null;
/**
 * 初始化 VueRouter
 */
export function initVueRouter() {
    router = newVueRouter();
    // 跳转之前，可进行权限控制
    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            // 页面标签标题
            document.title = to.meta.title;
        }
        next();
        // 后台使用token来校验登录状态，校验token是否存在,即是否登录
        // const token = localStorage.getItem('token');
        // if (token) {
        //     // 已登录，则跳到对应页面
        //     next();
        // } else {
        //     next();
        //     if (!to.name || PUBLIC_ROUTES.includes(to.name)) {
        //         // 首页或者开放页面直接放行
        //         next();
        //     } else {
        //         // 未登录页面,跳转登录页
        //         next('/login');
        //     }
        // }
    });
    // 跳转之后
    router.afterEach(() => {
        // 目前不做处理，仅作预留
    });
    return router;
}
/**
 * 清除 VueRouter
 */
export function clearVueRouter() {
    router = null;
}

export default router;
