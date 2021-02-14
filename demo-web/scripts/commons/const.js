const indexTemplate = require('../template/indexTemplate');
const vueTemplate = require('../template/vueTemplate');
const stoerTemplate = require('../template/stoerTemplate');
const scssTemplate = require('../template/scssTemplate');
const constTemplate = require('../template/constTemplate');
const dtoTemplate = require('../template/dtoTemplate');
const tsTemplate = require('../template/tsTemplate');
/**
 * 生成 view 的文件列表
 */
const viewFiles = [
    {
        ext: 'ts',
        name: 'index',
        template: indexTemplate,
    },
    {
        ext: 'vue',
        template: vueTemplate,
    },
    {
        ext: 'stoer.ts',
        template: stoerTemplate,
    },
    {
        ext: 'scss',
        template: scssTemplate,
    },
    {
        ext: 'const.ts',
        template: constTemplate,
    },
    {
        ext: 'dto.ts',
        template: dtoTemplate,
    },
    {
        ext: 'ts',
        template: tsTemplate,
    },
];
/**
 * 国际化
 */
const languages = ['zh-CN.ts', 'en.ts'];
const languagesTemplate = 'export default {};\n';
const commonsLanguages = `import login from '@/views/user/login/languages/en';`;
const commonMark = '/* automatically added, please do not modify manually */';

module.exports = { viewFiles, languages, languagesTemplate, commonsLanguages, commonMark };
