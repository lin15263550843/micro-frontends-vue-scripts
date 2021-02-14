import './public-path';
import './styles/index.scss';
import Vue from 'vue';

import App from './App.vue';
import { initVueRouter, clearVueRouter } from './router';
import store from './store';
import Config from './config';

import { Consts } from '@/commons/constants';
import { initAntDesignVue, initVueI18n, clearVueI18n } from './commons/utils';
import { MainContainerStore } from '@/components/mainContainer';
import { AnyType, MountProps } from '@/commons/dto/common.dto';
initAntDesignVue(); // 按需引入 ant-design-vue

Vue.config.productionTip = false;
Vue.prototype.$Consts = Consts; // 全局常量

let instance: Vue | null = null;

function render(props = {}) {
    const { container, rootRouter } = (props as AnyType) || {};
    const router = initVueRouter();
    const i18n = initVueI18n();
    instance = new Vue({
        router,
        i18n,
        store,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#micro-app') : '#micro-app');
    // 没有 rootRouter 的情况会使用 router
    Vue.prototype.$rootRouter = rootRouter || router;
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: MountProps) {
    console.log('mount props------>>>', props);
    // const { rootConfig, onGlobalStateChange, setGlobalState } = props;
    const { rootConfig, onGlobalStateChange } = props;
    Vue.prototype.$globalState = props;
    if (rootConfig) Config.apiBaseUrl = rootConfig.apiBaseUrl; // 设置接口请求地址
    if (rootConfig) Config.theme = rootConfig.theme; // 设置接口请求地址
    render(props);
    // 监听全局状态变更
    onGlobalStateChange((state: AnyType, prev: AnyType) => {
        // state: 变更后的状态; prev: 变更前的状态
        console.log('子应用监听到状态变更------>>>', state, prev);
        Config.theme = state && state.theme;
        MainContainerStore.setTheme(Config.theme);
    });
    // 设置全局状态变更
    // setGlobalState({ name: 'micro-app' });
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: AnyType) {
    console.log('unmount props------>>>', props);
    if (instance) {
        instance.$destroy();
        instance.$el.innerHTML = '';
    }
    instance = null;
    clearVueRouter();
    clearVueI18n();
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: AnyType) {
    console.log('update props------>>>', props);
}

export default instance;
