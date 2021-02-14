/**
 * Created by lhd on 2020-02-03 11:11:11
 * 快速生成模块
 */
const fs = require('fs');
const logger = require('../commons/logger');
const routesTemplate = require('../template/routesTemplate');
const { getTemplateCreateInfo, createDirectory } = require('../commons/util');
const { viewsDir, rootRoutesPath } = require('../commons/path');
const { commonMark } = require('../commons/const');

const argv2 = process.argv[2];
const modulesDir = viewsDir + argv2; // 模块目录
const modulesName = argv2; // 模块名称
const fileName = `${modulesName}Routes`; // 文件名称
const createTemplateInfo = getTemplateCreateInfo(modulesName); // 创建模板需要的信息
/**
 * 处理 router/rootRoutes.ts 数据
 * @param {string} data 读取的文件数据
 */
function handleRootRoutesData(data) {
    const importPath = `import ${fileName} from '@/views/${modulesName}/${fileName}'\n`;
    return importPath + data.replace(commonMark, `${fileName},\n            ${commonMark}`);
}
/**
 * 添加到引用到 rootRoutes.ts
 * @param {string} modulesDir
 */
function updateRootRoutes() {
    fs.readFile(rootRoutesPath, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
        if (err) {
            logger.errLog(err);
            return;
        }
        fs.writeFile(rootRoutesPath, handleRootRoutesData(data), { flag: 'r+', encoding: 'utf8' }, err => {
            if (err) {
                logger.errLog(err);
            } else {
                logger.sucLog(`更新成功 >>> ${rootRoutesPath}`);
            }
        });
    });
}
/**
 * 创建 module
 */
function createModuleFiles() {
    const filePath = `${modulesDir}/${fileName}.ts`;
    if (createDirectory(modulesDir)) {
        // 防止覆盖已有同名文件
        if (fs.existsSync(filePath)) {
            logger.warLog(`${filePath} 已存在，请确认路径是否正确`);
        } else {
            logger.log(`开始创建...`);
            fs.writeFile(filePath, routesTemplate(createTemplateInfo), { encoding: 'utf8', flag: 'wx' }, err => {
                if (err) throw err;
                logger.sucLog(`成功创建 >>> ${filePath}`);
                updateRootRoutes();
            });
        }
    } else {
        logger.errLog(`目录创建失败：${modulesDir}`);
    }
}

if (modulesName && /^[A-Za-z]+$/.test(modulesName)) {
    createModuleFiles();
} else {
    logger.errLog('请输入正确的模块名称（驼峰命名的英文单词）');
    return;
}
