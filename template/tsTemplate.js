/**
 * .ts 文件模板
 */
module.exports = function tsTemplate(params) {
    return `import { Component, Vue } from 'vue-property-decorator';
/**
 * Created by ${params.authorName} on ${params.dataTime}
 */
@Component
export default class ${params.initialsUpperCaseName} extends Vue {
    /**
     * 生命周期 挂载完成
     */
    private mounted() {
        // coding...
    }
}
`;
};
