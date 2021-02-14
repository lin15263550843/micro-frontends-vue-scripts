module.exports = {
    // packageManager: 'yarn',
    printWidth: 120, // 超过最大值换行
    tabWidth: 4, // 缩进字节数
    useTabs: false, // 缩进不使用tab，使用空格
    semi: true, // 句尾添加分号
    singleQuote: true, // 使用单引号而不是双引号
    quoteProps: 'as-needed', // 对象属性的引号使用 as-needed 仅在需要的时候使用 consistent 有一个属性需要引号，就都需要引号 preserve 保留用户输入的情况
    jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
    trailingComma: 'all', // 尽可能控制尾随逗号的输出。 有效选项： 'none' - 无尾随逗号 ' es5' - 在ES5中有效的尾随逗号（对象，数组等） 'all' - 尾随逗号 尽可能（函数参数）
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
    arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空白区域敏感度。 有效选项： 'css' - 尊重CSS显示属性的默认值。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的。
    vueIndentScriptAndStyle: false, // 是否缩进Vue文件中的代码<script>和<style>标记
    endOfLine: 'lf', // 指定 prettier 的换行符    结尾是 \r(cr) \n(lf) \r\n(crlf) auto
    // embeddedLanguageFormatting: 'auto', // 控制Prettier格式是否引用文件中嵌入的代码
    // proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    // arrayBracketSpacing: true,
    // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
    // eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
    // ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    // parser: 'babylon', // 格式化的解析器，默认是babylon
    // requireConfig: false, // Require a 'prettierconfig' to format prettier
    // stylelintIntegration: false, // 不让prettier使用stylelint的代码格式进行校验
    // tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
};
