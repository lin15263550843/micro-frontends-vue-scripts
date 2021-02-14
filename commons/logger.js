const chalk = require('chalk')

const log = msg => (typeof msg !== 'object' ? console.log(chalk.blue(`${msg}`)) : console.log(msg))
const warLog = msg => (typeof msg !== 'object' ? console.log(chalk.yellow(`${msg}`)) : console.log(msg))
const sucLog = msg => (typeof msg !== 'object' ? console.log(chalk.green(`${msg}`)) : console.log(msg))
const errLog = msg => (typeof msg !== 'object' ? console.log(chalk.red(`${msg}`)) : console.log(msg))
/**
 * 打印日志
 */
module.exports = {
    log,
    warLog,
    sucLog,
    errLog,
}
