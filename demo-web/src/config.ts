import { Language, Themes } from '@/commons/constants';
/**
 * ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 * ★                                                            ★
 * ★       请不要随便修改，如有添加找相关负责人确认                ★
 * ★       开发过程中配置项可以随便修改，但是不要提交              ★
 * ★       如果不听，出了问题后果自负哟...........                ★
 * ★                                                            ★
 * ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 */
export default class Config {
    // 接口调用基础URL
    static apiBaseUrl = `${process.env.VUE_APP_APIBASEURL}/${process.env.VUE_APP_APIPREFIX}/`;
    // 图片前缀 URL
    static imgPrefixUrl = 'https://example.com/';
    // 国际化
    static language = Language.zhCN;
    // 主题
    static theme = Themes.PRIMARY;
}
