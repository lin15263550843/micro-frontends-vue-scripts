const path = require('path')
const resolve = dir => path.join(process.cwd(), dir)

/**
 * 路径存放
 */
module.exports = {
    srcPath: resolve('src'),
    viewsDir: `src/views/`,
    languagesDir: '/languages',
    commonsLanguagesPath: 'src/commons/languages',
    rootRoutesPath: 'src/router/rootRoutes.ts',
    importViewsPath: '@/views/',

    // dotenv: resolveApp('.env'),
    // appBuild: resolveApp('build'),
    // appPublic: resolveApp('public'),
    // appHtml: resolveApp('public/index.html'),
    // appIndexJs: resolveApp('src/index.js'),
    // appPackageJson: resolveApp('package.json'),
    // appSrc: resolveApp('src'),
    // yarnLockFile: resolveApp('yarn.lock'),
    // testsSetup: resolveApp('src/setupTests.js'),
    // appNodeModules: resolveApp('node_modules'),
    // publicUrl: getPublicUrl(resolveApp('package.json')),
    // servedPath: getServedPath(resolveApp('package.json')),
}
