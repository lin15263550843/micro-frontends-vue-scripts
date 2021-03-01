/**
 * index.ts 文件模板
 */
module.exports = function indexTemplate(params) {
    return `/**
 * Created by ${params.authorName} on ${params.dataTime}
 */
import ${params.initialsUpperCaseName} from './${params.fileName}.vue';

export { default as ${params.initialsUpperCaseName}Module } from './${params.fileName}.stoer';
export { default as ${params.initialsUpperCaseName}Const } from './${params.fileName}.const';
export * from './${params.fileName}.dto';
export default ${params.initialsUpperCaseName};
`;
};
