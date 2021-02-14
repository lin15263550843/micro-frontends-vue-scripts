import VueRouter from 'vue-router';
import Config from '@/config';
/**
 * 公共类型存放
 */
export interface CommonTest {
    [index: number]: string;
    [key: string]: any;
}
/**
 * 接口数据返回值 response
 */
export interface ResOutDto<T = any> {
    code: number;
    data: T;
    message: string;
}
/**
 * 将 T 中的所有属性，以及子属性设为只读
 * DeepReadonly<T>
 */
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };

// ReadOnly、Partial源码
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P]
// }
// type Partial<T> = {
//     [P in keyof T]?: T[P]
// }
/**
 *
 */
export interface MountProps {
    name: string;
    onGlobalStateChange: Function;
    setGlobalState: Function;
    rootConfig: typeof Config;
    rootRouter: VueRouter;
}

export type AnyType = any;
