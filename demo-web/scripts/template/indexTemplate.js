/**
 * index.ts 文件模板
 */
module.exports = function indexTemplate(params) {
    return `/**
 * Created by ${params.authorName} on ${params.dataTime}
 */
import ${params.initialsUpperCaseName} from './${params.fileName}.vue';

export default ${params.initialsUpperCaseName};
`;
};
