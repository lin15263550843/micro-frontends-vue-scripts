/**
 * Created by lhd on 2020-02-03 11:11:11
 * 快速生成页面
 */
const path = require('path');
const fs = require('fs');
const { getTemplateCreateInfo, createDirectory } = require('../commons/util');
const { viewsDir, languagesDir, commonsLanguagesPath, importViewsPath } = require('../commons/path');
const { viewFiles, languages, languagesTemplate, commonMark } = require('../commons/const');
const logger = require('../commons/logger');
const argv2 = process.argv[2];
const argv3 = process.argv[3];
const modulesDir = viewsDir + argv3; // 模块目录
// const modulesName = path.parse(argv3).dir // 模块
const fileName = path.parse(argv3).name; // 文件名称
// 创建模板需要的信息
const createTemplateInfo = getTemplateCreateInfo(fileName);

/**
 * 处理 commons/languages 中的数据
 * @param {string} data 读取的文件数据
 */
function handleCommonsLanguages(data, fName) {
    const fn = fName.split('.')[0];
    const importPath = `import ${fileName} from '${importViewsPath}${argv3}${languagesDir}/${fn}';\n`;
    return importPath + data.replace(commonMark, `${fileName},\n    ${commonMark}`);
}
/**
 * 添加到引用到 commons/languages
 * @param {string} modulesDir
 */
function updateCommonsLanguages() {
    languages.forEach(fileName => {
        const clp = `${commonsLanguagesPath}/${fileName}`;
        fs.readFile(clp, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
            if (err) {
                logger.errLog(err);
                return;
            }
            fs.writeFile(clp, handleCommonsLanguages(data, fileName), { flag: 'r+', encoding: 'utf8' }, err => {
                if (err) {
                    logger.errLog(err);
                } else {
                    logger.sucLog('写入成功');
                }
            });
        });
    });
}
/**
 *  创建 languages
 * @param {path} modulesDir
 */
function createLanguagesDir() {
    const languagesPath = `${modulesDir}${languagesDir}`;
    fs.mkdirSync(languagesPath, { recursive: true });
    languages.forEach(fileName => {
        const file = `${languagesPath}/${fileName}`;
        fs.writeFile(file, languagesTemplate, { encoding: 'utf8', flag: 'wx' }, err => {
            if (err) throw err;
            logger.sucLog(`成功创建 >>> ${file}`);
        });
    });
    updateCommonsLanguages();
}
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
            if (argv2 === '--view') {
                console.log('argv2---------->>>>>>>>>>>>>>>>>>>>>', argv2);
                createLanguagesDir();
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
