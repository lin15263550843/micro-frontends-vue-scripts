/**
 * Created by lhd on 2020-02-03 11:11:11
 * 快速生成页面
 */
module.exports = function createView(isComponent, argv3 = '') {
    const path = require('path');
    const fs = require('fs');
    const { getTemplateCreateInfo, createDirectory } = require('../commons/util');
    const { viewsDir } = require('../commons/path');
    const { viewFiles, commonMark } = require('../commons/const');
    const logger = require('../commons/logger');
    const modulesDir = viewsDir + argv3; // 模块目录
    // const modulesName = path.parse(argv3).dir // 模块
    const fileName = path.parse(argv3).name; // 文件名称
    // 创建模板需要的信息
    const createTemplateInfo = getTemplateCreateInfo(fileName);
    /**
     * 处理 moduleRoutes.ts 数据
     * @param {string} data 读取的文件数据
     */
    function handleRoutesData(data, modulesName) {
        const addData = `{
            path: '${fileName}',
            name: '${fileName}',
            component: () => import(/* webpackChunkName: "${modulesName}" */ '@/views/${modulesName}/${fileName}'),
            meta: { title: '${fileName}' },
        },
        ${commonMark}`;
        return data.replace(commonMark, addData);
    }
    /**
     * 添加到引用到 rootRoutes.ts
     * @param {string} modulesDir
     */
    function updateRoutes() {
        const mds = modulesDir.split('/');
        const mdsIndex = mds.length - 2;
        const modulesName = mds[mdsIndex];
        mds.splice(mdsIndex, 2, modulesName, `${modulesName}Routes.ts`);
        const routesPath = mds.join('/');
        fs.readFile(routesPath, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
            if (err) {
                logger.errLog(err);
                return;
            }
            fs.writeFile(routesPath, handleRoutesData(data, modulesName), { flag: 'r+', encoding: 'utf8' }, err => {
                if (err) {
                    logger.errLog(err);
                } else {
                    logger.sucLog(`更新成功 >>> ${routesPath}`);
                }
            });
        });
    }
    /**
     * 创建 view
     */
    function createViewFiles() {
        const indexFile = `${modulesDir}/index.ts`;
        if (createDirectory(modulesDir)) {
            // 防止覆盖已有同名文件
            if (fs.existsSync(indexFile)) {
                logger.warLog(`${modulesDir} 已存在，请确认路径是否正确`);
            } else {
                logger.log(`开始创建...`);
                viewFiles.forEach(item => {
                    const file = `${modulesDir}/${item.name || fileName}.${item.ext}`;
                    fs.writeFile(file, item.template(createTemplateInfo), { encoding: 'utf8', flag: 'wx' }, err => {
                        if (err) throw err;
                        logger.sucLog(`成功创建 >>> ${file}`);
                    });
                });
                if (!isComponent) {
                    updateRoutes();
                }
            }
        } else {
            logger.errLog(`目录创建失败：${modulesDir}`);
        }
    }

    if (!argv3) {
        logger.errLog('请输入正确的参数');
        return;
    }
    if (!argv3.includes('/')) {
        logger.errLog('请输入页面名称');
        return;
    }
    createViewFiles();
};
