/**
 * Created by lhd on 2020-02-03 11:11:11
 * 创建项目
 */
const { spawn } = require('child_process');
const { exampleAppGitPath } = require('../commons/path');
const logger = require('../commons/logger');

module.exports = function createApp(name, option) {
    const argvs = ['clone', exampleAppGitPath, name];
    if (option.main) argvs.splice(1, 0, '-b', 'main-app');
    const source = spawn('git', argvs, { stdio: 'inherit' });

    // source.stdout.on('data', data => {
    //     console.log(`stdout: ${data}`)
    // })

    // source.stderr.on('data', data => {
    //     console.error(`stderr: ${data}`)
    // })

    source.on('close', code => {
        if (0 === code) {
            logger.sucLog(`${name} 创建成功`);
            spawn('rm', ['-rf', `${name}/.git`]);
        }
    });
};
