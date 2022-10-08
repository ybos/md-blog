# VitePress的搭建和常用指令
## 必要安装
1. git -- 版本管理
2. node -- 核心
3. yarn -- npm 的包管理代替工具
#### Node.js 的安装
```bash
# 下载 node.js 的包，可以在官网下载 nodejs.org
wget https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz
tar -xf node-v16.17.0-linux-x64.tar.xz
cd node-v16.17.0-linux-x64/bin

# 转移到系统目录中
mv ./node-v16.17.0-linux-x64 /usr/local/node-v16.17.0

# 创建软链
ln -s /usr/local/node-v16.17.0/bin/node /usr/local/bin/node
ln -s /usr/local/node-v16.17.0/bin/npm /usr/local/bin/npm
```
#### Yarn 的安装
```bash
curl -o- -L https://yarnpkg.com/install.sh | bash

# 根据提示把 Yarn 当前的安装路径增加到 $PATH 中
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
```
## 安装 & 初始化 VitePress
新建一个目录，并使用 yarn 进行初始化
```bash
mkdir myblog
cd myblog
yarn init -y
```
初始化命令会在目录生成 `package.json`文件
然后在该目录安装 vitepress & vue
```bash
yarn add --dev vitepress vue
```
最后一步编辑 `package.json` 文件，并增加一段启用用的 json 代码
```javascript
# 如果需要修改端口 可以在描述中加入 --port 8080
# 如果需要修改Host 可以在描述中加入 --host 0.0.0.0
# 只在 dev 环境下有用
"scripts": {
    "docs:dev": "vitepress dev docs --host 0.0.0.0 --port 8080",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
}
```
## 增加文章信息
在项目根目录中增加 `/docs`目录，用于存放文章
首页的固定文件名为 `index.md`，新建用于展示首页
其他的文件以相同的规则在 `/docs`之内建立，如 `/docs/guide/index.md` 等同于访问 `xx.com/guide/`
## 增强效果
### 主题的配置
在 `/docs` 中建立 `/.vitepress/config.ts` 用户配置主题
#### 侧边栏和顶部导航栏
```javascript
export default {
  themeConfig: {
    nav: [
      { 
        text: "Guide",
        items: [
          { text: "Index", link: "/guide/" },
          { text: "One", link: "/guide/one.html" },
          { text: "Two", link: "/guide/two.html" },
        ]
      },
      { text: "Config", link: "/config/" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one.html" },
            { text: "Two", link: "/guide/two.html" },
          ]
        }
      ],
      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "Second", link: "/config/second.html" },
            { text: "Third", link: "/config/third.html" },
          ]
        }
      ]
    }
  }
}
```
#### 底部描述
同样在 themeConfig 增加有关 footer 的描述
```javascript
footer: {
    message: "<a href='https://beian.miit.gov.cn/' target='_blank'>苏ICP备14057462号-1</a>",
    copyright: "Copyright ©2014-2022 YBO.ME 版权所有"
}
```
## 静态资源
在`docs`目录中新增`public`目录，并将静态资源放在`/docs/public`中，在源码中使用`/profile.jpeg`来调用，其他文档中的内容更推荐用 CDN
## 常用命令
### 测试命令
```
yarn docs:dev
```
### 构建命令
```javascript
yarn docs:build
```
构建完成后，会生成`/docs/.vitepress/dist`目录，如果需要部署，直接指向该目录即可。
