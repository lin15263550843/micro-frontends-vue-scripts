/**
 * .store.ts 文件模板
 */
module.exports = function storeTemplate(params) {
    return `import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
/**
 * Created by ${params.authorName} on ${params.dataTime}
 */
@Module({
    namespaced: true,
    name: '${params.fileName}',
    store,
    dynamic: true,
})
class ${params.initialsUpperCaseName}Module extends VuexModule {}

export default getModule(${params.initialsUpperCaseName}Module);
`;
};
