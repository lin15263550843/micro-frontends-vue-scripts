import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Language } from '@/commons/constants';
import zhCN from '@/commons/languages/zh-CN';
import en from '@/commons/languages/en';
import Config from '@/config';
import { AnyType } from '../dto/index.dto';

Vue.use(VueI18n);
/**
 * 准备翻译的语言环境信息
 */
const messages = {
    [Language.zhCN]: zhCN,
    [Language.en]: en,
};
/**
 * 通过选项创建 VueI18n 实例
 */
function newVueI18n() {
    return new VueI18n({
        locale: Config.language, // 设置地区
        messages, // 设置地区信息
    });
}
/**
 * I18n 实例对象
 */
let vueI18n: VueI18n = newVueI18n();
// let vueI18n: VueI18n | null = null
/**
 * 初始化 VueI18n
 */
export function initVueI18n() {
    return (vueI18n = newVueI18n());
}
/**
 * 清除 VueI18n
 */
export function clearVueI18n() {
    vueI18n = null as AnyType;
}

export default vueI18n;
