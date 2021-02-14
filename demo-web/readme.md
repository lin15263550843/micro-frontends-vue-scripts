# micro-web

### 安装依赖

```
yarn install
```

### 启动并在浏览器打开项目

```
yarn dev
```

### 格式化代码

```
yarn format
```

### 打包

```
yarn build
```

### 单元测试

```
yarn test
```

### 整理和修复文件

```
yarn lint
```

### 关于快速生成页面脚本说明

module 代表模块目录，pageName 代表页面名称

#### 1、生成模块

会在 views 目录下生成 module

```
yarn run view module
```

#### 2、生成 vue 页面

会在 views/module 目录下生成 pageName

```
yarn run view module/pageName
```

#### 3、生成 vue 组件

会在相应的目录下生成组件

```
yarn comp module/pageName/componentName
```

### 以上方式都支持多层目录创建

```
yarn run views aaa/bbb/cccDdd/pageName
```

### 目录结构

```tree
┌─────────────────────────────────────────────────────────────────────
├── dist                                // 打包输出目录
├── node_modules                        // 依赖安装目录
├── public                              // 公共目录
│   ├── favicon.ico                     // 站点icon
│   ├── index.html                      // 入口文件
│   └── manifest.json                   // manifest配置文件
├── scripts                             // 脚本存放目录
├── src                                 // 源代码
│   ├── assets                          // 静态资源
│   ├── commons                         // 公共文件
│   │   ├── constants                   // 常量存放
│   │   │   ├── index.ts                // 入口文件
│   │   │   ├── consts.ts               // 全局常量
│   │   │   ├── language.ts             // 国际化
│   │   │   ├── themes.ts               // 主题
│   │   │   └── urls.ts                 // 接口地址
│   │   ├── dto                         // 类型
│   │   │   ├── common.dto.ts           // 公共类型 DTO
│   │   │   └── index.dto.ts            // 入口文件
│   │   ├── http                        // http 接口请求
│   │   │   ├── index.ts                // 入口文件
│   │   │   ├── http.ts                 // 请求封装
│   │   │   └── interceptors.ts         // 请求拦截
│   │   ├── languages                   // 国际化
│   │   │   ├── en.ts                   // 英语
│   │   │   └── zh-CN.ts                // 简体中文
│   │   ├── utils                       // 工具
│   │   │   ├── index.ts                // 入口文件
│   │   │   ├── localStorage.ts         // 存储
│   │   │   ├── useAntDesignVue.ts      // UI 组件库
│   │   │   ├── useI18n.ts              // I18n 国际化
│   │   │   └── utils.ts                // 工具类
│   │   └──
│   ├── components                      // 公共组件
│   ├── router                          // 路由
│   │   ├── index.ts                    // 路由配置入口
│   │   └── rootRoutes.ts               // 顶级路由列表
│   ├── store                           // 状态管理
│   │   └── index.ts                    // 实例化 vuex
│   ├── styles                          // 样式
│   │   ├── index.scss                  // 入口文件
│   │   ├── common.scss                 // 公共样式
│   │   ├── variables.scss              // scss 全局变量
│   │   └── themes                      // 主题
│   │       ├── primary.scss            // 默认主题
│   │       └── red.scss                // 自定义主题
│   │── types                           // ts 声明文件
│   ├── views                           // 页面目录（主要开发目录）
│   ├── App.vue                         // Vue 根文件
│   ├── config.ts                       // 项目配置文件
│   ├── main.ts                         // 应用主入口
│   └── public-path.js                  // 微前端配置文件
├── tests                               // 单元测试目录
├── .browserslistrc                     // 配置兼容浏览器
├── .env                                // 环境变量配置文件
├── .env.development                    // 开发模式
├── .env.production                     // 生产模式
├── .eslintignore                       // eslint 规则忽略
├── .eslintrc.js                        // eslint 规则文件
├── .gitattributes                      // Git 配置文件
├── .gitignore                          // Git 提交文件忽略
├── babel.config.js                     // Babel 配置文件
├── components.md                       // 公共组件说明
├── package.json                        // node 项目配置及模块管理文件
├── tsconfig.json                       // ts 配置文件
├── vue.config.js                       // Vue webpack 相关配置文件
├── README.md                           // 自述文件
├── yarn.lock                           // yarn 包管理文件
└─────────────────────────────────────────────────────────────────────
```
