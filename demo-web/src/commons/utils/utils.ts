import { AnyType } from '../dto/index.dto';

/**
 * 获取窗口可见区域大小信息
 */
export const getWindowSizeInfo = () => {
    return {
        width: window.innerWidth || window.document.body.clientWidth || window.document.documentElement.clientHeight,
        height: window.innerHeight || window.document.body.clientHeight || window.document.documentElement.clientHeight,
    };
};
/**
 * 图片加载
 * @param url 图片地址
 * @return HTMLImageElement
 */
export function loadImage(url: string) {
    // return new Promise((resolve: (value: HTMLImageElement) => void, reject) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        try {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(img);
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 * 日期时间格式化，支持任何类型数据，转换成 Date 类型失败后会返回 ''
 * @param {string} fmt - 格式：YYYY-mm-dd HH:MM:SS
 * @param {string} date - 返回：2222-22-22 22:22:22
 */
export function dateFormat(fmt: string, date: AnyType) {
    if (!(date instanceof Date)) {
        if (!date) return '';
        if ('number' === typeof date) {
            date = new Date(date); // 时间戳
        } else {
            date = date.replace(/\-/g, '/'); // 兼容 iOS 时间转换
            date = new Date(date); // 支持字符串
        }
    }
    if (isNaN(date.getTime())) return '';
    let ret;
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            const key = k as keyof typeof opt;
            fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[key] : opt[key].padStart(ret[1].length, '0'));
        }
    }
    return fmt;
}
/**
 * 异步睡觉器
 * @param duration 睡觉的毫秒数
 */
export async function asyncSleep(duration: number) {
    await new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}
/**
 * 获取范围内的随机数整数
 * @param min 最大边界值
 * @param maxs 最小边界值
 */
export function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}
