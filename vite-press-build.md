# 个人博客构建及部署
> 使用VitePress构建以及使用Nginx部署

## 仓库初始化
```shell
# install
$ npm install -D vitepress
# init
$ npx vitepress init
# 初始换配置官方建议存储在docs文件夹下，文件多的需要，本博客没必要
```
## 构建结果目录结构
```
.
│ .vitepress
│  └─ config.js
│ api-examples.md
│ markdown-examples.md
│ index.md
└─ package.json
```
## 添加GIT忽略文件
```gitignore
node_modules
!*.md
.vitepress/cache
!*.json
.idea
!.vitepress/config.ts
```

## 修改核心配置文件
> 核心配置文件就一个文件=>.vitepress/config.ts文件
> 以下为全部配置
```ts
// 配置
import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base: "./",
    // 图片真实路径是./public/img/logo.png，不使用public文件夹图片打包后不生效
    head: [['link', {rel: 'icon', href: '/img/logo.png'}]],
    title: "FollowYourHeart",
    description: "LearningNote",
    themeConfig: {
        logo: '/img/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: '博客构建', link: '/vite-press-build'},
            {text: 'EnvLearning', link: '/env'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Config', link: '/config/'}
        ],
        // sidebar默认配置是数组格式，如果要支持默认配置和有目录的路由路径，需要改为对象格式，参开如下
        // sidebar: [
        //   {
        //     text: 'Examples',
        //     collapsable: false,
        //     items: [
        //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/api-examples' }
        //     ]
        //   },
        //   {
        //     text: 'EnvStudy',
        //     collapsable: false,
        //     items: [
        //       { text: 'LinuxEnv', link: '/env' }
        //     ]
        //   }
        // ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            "/": [
                {
                    text: 'Examples',
                    items: [
                        {text: 'Markdown Examples', link: '/markdown-examples'},
                        {text: 'Runtime API Examples', link: '/api-examples'}
                    ]
                },
                {
                    text: 'EnvStudy',
                    items: [
                        {text: 'LinuxEnv', link: '/env'}
                    ]
                }
            ],
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        {text: 'Index', link: '/guide/'},
                        {text: 'One', link: '/guide/one'},
                        {text: 'Two', link: '/guide/two'}
                    ]
                }
            ],

            // This sidebar gets displayed when a user
            // is on `config` directory.
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        {text: 'Index', link: '/config/'},
                        {text: 'Three', link: '/config/three'},
                        {text: 'Four', link: '/config/four'}
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zouyaowen/freewheeling'}
        ],
        footer: {
            message: '<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备18026052号-2</a>',
            copyright: '关注公众号：北国故事'
        }
    }
})


```




