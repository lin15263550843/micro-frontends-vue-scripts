const path = require('path');
const resolve = dir => path.join(process.cwd(), dir);

/**
 * 路径存放
 */
module.exports = {
    viewsDir: `src/views/`,
    srcPath: resolve('src'),
    languagesDir: '/commons/languages',
    importViewsPath: '@/views/',
    rootRoutesPath: 'src/router/rootRoutes.ts',
    commonsLanguagesPath: 'src/commons/languages',
    exampleAppGitPath: 'https://github.com/lin15263550843/example-micro-web.git',
};
