import service from './interceptors';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ResOutDto } from '@/commons/dto/index.dto';
import Config from '@/config';
/**
 * 封装 http 服务
 */
export class Http {
    /**
     * @param url 请求地址
     * @return url  完整的请求地址
     */
    private static getUrl(url: string): string {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        } else {
            return Config.apiBaseUrl + url;
        }
    }
    /**
     * 封装 get 请求
     * @param url 请求接口 url
     * @param params 请求拼接的参数
     * @param config 配置
     */
    public static get<T = any, R = ResOutDto<T>>(
        url: string,
        params: object = {},
        config?: AxiosRequestConfig,
    ): Promise<R> {
        // get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
        return service.get(this.getUrl(url), { ...config, params });
    }
    /**
     *
     * 封装 post 请求
     * @param url 请求接口 url
     * @param data 请求参数
     * @param config 配置
     */
    public static post(url: string, data: any = {}, config?: AxiosRequestConfig): Promise<ResOutDto> {
        // post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
        return service.post(this.getUrl(url), data, config);
    }
    /**
     * 自定义请求
     * @param config 配置
     */
    public request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return service.request<T>(config);
    }
}
