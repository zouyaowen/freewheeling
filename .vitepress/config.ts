import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "./",
    head: [['link', {rel: 'icon', href: './assets/img/logo.png'}]],
    title: "FollowYourHeart",
    description: "LearningNote",
    themeConfig: {
        logo: './assets/img/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: 'RuntimeAPI', link: '/api-examples'},
            {text: 'EnvLearning', link: '/env'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Config', link: '/config/'}
        ],

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
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
            message: '<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备18026052号-2</a>',
            copyright: '关注公众号：北国故事'
        }
    }
})
