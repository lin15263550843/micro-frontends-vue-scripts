const fs = require('fs')
// const path = require('path')
const sd = require('silly-datetime')
const { execSync } = require('child_process')
/**
 * 创建目录
 * @param {string} dirName 目录名称
 */
function createDirectory(dirName) {
    if (fs.existsSync(dirName)) {
        return true
    } else {
        // if (createDirectory(path.dirname(dirName))) {
        fs.mkdirSync(dirName, { recursive: true })
        return true
        // }
    }
}
/**
 * 短横线转换为驼峰
 *
 * @param {string} name 要转换的名称
 */
function convertToLittleHump(name) {
    return name.replace(/^./, l => l.toUpperCase()).replace(/-([a-z])/g, (all, i) => i.toUpperCase())
}
/**
 * 转换为首字母大写
 * @param {string} name
 * @return {string} Name
 */
function toInitialsUpperCase(name) {
    if (typeof name === 'string' && /^[a-zA-Z]/.test(name)) {
        const first = name.charAt(0)
        return name.replace(first, first.toUpperCase())
    } else {
        throw new Error('请传入正确的字符串')
    }
}
/**
 * 获取创建模板需要的信息
 * @param {string} name
 * @return {object}
 */
function getTemplateCreateInfo(name) {
    return {
        authorName: execSync('git config user.name').toString().trim(), // 页面创建者（即配置的 git 用户名）
        fileName: name, // 文件名称
        initialsUpperCaseName: toInitialsUpperCase(name), // 首字母大写的名称
        dataTime: sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
    }
}

module.exports = { convertToLittleHump, toInitialsUpperCase, getTemplateCreateInfo, createDirectory }
