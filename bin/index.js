#!/usr/bin/env node
const { spawn } = require('child_process');
const { version } = require('../package.json');
const { program } = require('commander');
const createApp = require('../generator/createApplication');
const createModule = require('../generator/createModule');
const createView = require('../generator/createView');
/**
 * 创建应用
 */
program
    .command('create <name>')
    // .option('-p, --portal', '是否创建主应用')
    .description('创建微应用')
    .action((name, option) => {
        createApp(name, option);
    });
/**
 * 创建模块
 */
program
    .command('module <dirName>')
    .description('创建模块')
    .action(dirName => {
        createModule(dirName);
        // spawn('node', ['../generator/createModule.js', dirName], { stdio: 'inherit' });
        // execFile('node', ['generator/createModule.js', dirName], (error, stdout, stderr) => {
        //     if (error) {
        //         throw error;
        //     }
        //     console.log(stdout);
        //     console.log(stderr);
        // });
    });
/**
 * 创建 view / component
 */
program
    .command('view <dirName>')
    .option('-c, --component', '是否创建组件')
    .description('创建视图页面(添加 -c 参数创建组件)')
    .action((dirName, option) => {
        createView(option.component, dirName);
    });

program.version(version, '-v, --version', '查看版本号').parse(process.argv);
