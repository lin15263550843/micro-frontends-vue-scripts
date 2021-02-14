#!/usr/bin/env node
const { spawn } = require('child_process');
const { version } = require('../package.json');
const { program } = require('commander');
const createApp = require('../generator/createApplication');
const logger = require('../commons/logger');
/**
 * 创建应用
 */
program
    .command('create <name>')
    // .option('-p, --portal', '是否创建主应用')
    .description('create appliction')
    .action((name, option) => {
        createApp(name, option);
    });
/**
 * 创建模块
 */
program
    .command('module <dirName>')
    .description('create module')
    .action(dirName => {
        spawn('node', ['generator/createModule.js', dirName], { stdio: 'inherit' });
        // execFile('node', ['generator/createModule.js', dirName], (error, stdout, stderr) => {
        //     if (error) {
        //         throw error;
        //     }
        //     console.log(stdout);
        //     console.log(stderr);
        // });
    });
/**
 * 创建 view
 */
program
    .command('view <dirName>')
    .description('create view')
    .action(dirName => {
        spawn('node', ['generator/createView.js', '--view', dirName], { stdio: 'inherit' });
    });
/**
 * 创建 component
 */
program
    .command('comp <dirName>')
    .description('create component')
    .action(dirName => {
        spawn('node', ['generator/createView.js', '--component', dirName], { stdio: 'inherit' });
    });

program.version(version, '-v, --version', '查看版本号').parse(process.argv);
