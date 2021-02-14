/**
 * routes.ts 文件模板
 */
module.exports = function routesTemplate(params) {
    return `import { RouteConfig } from 'vue-router';
/**
 * Created by ${params.authorName} on ${params.dataTime}
 * ${params.fileName} 模块路由表
 */
const routes: RouteConfig = {
    path: '${params.fileName}',
    name: '${params.fileName}',
    component: { render: h => h('router-view') },
    children: [
        /* automatically added, please do not modify manually */
    ],
};

export default routes;
`;
};
