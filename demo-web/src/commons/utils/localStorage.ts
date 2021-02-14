import { AnyType } from './../dto/common.dto';
/**
 * 封装 LocalStorage
 */
export class LocalStorage {
    private static readonly stringType = '_STRING_TYPE_9527';
    /**
     * 封装 set 存数据
     * @param key 数据 key 值
     * @param value  要存储的数据
     */
    public static set(key: string, value: AnyType) {
        if (!key) return;
        const type = Object.prototype.toString.call(value).slice(8, -1);
        if ('Object' === type || 'Array' === type) {
            value = JSON.stringify(value);
        } else if ('String' === type && !isNaN(Number(value))) {
            value += this.stringType;
        }
        localStorage.setItem(key, value);
    }
    /**
     * 封装 get 取数据
     * @param key 数据 key 值
     */
    public static get(key: string) {
        if (!key) return;
        const item = localStorage.getItem(key);
        if (!item) return undefined;
        if (this.stringType === item.slice(-18)) {
            return item.replace(this.stringType, '');
        }
        let value = null;
        try {
            value = JSON.parse(item);
        } catch (e) {
            value = item;
        }
        if ('undefined' === value) {
            return undefined;
        }
        if ('NaN' === value) {
            return NaN;
        }
        return value;
    }
    /**
     * 封装 remove 清除数据
     * @param key 数据 key 值
     */
    public static remove(key: string) {
        if (!key) return;
        return localStorage.removeItem(key);
    }
    /**
     * 封装 clear 清除全部数据
     */
    public static clear() {
        return localStorage.clear();
    }
    /**
     * 封装 size 返回存储数量
     */
    public static size() {
        return localStorage.length;
    }
}
