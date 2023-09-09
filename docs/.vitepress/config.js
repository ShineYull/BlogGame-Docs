export default {
    title: '独立游戏博客',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/icon-BlogGame.webp' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "独立游戏博客",  //左上角的
        logo: "/icon-BlogGame.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
          {
            text: "Godot",             //导航标签的名字
            items: [                  //这种格式是有下拉菜单的版本
                { text: "暂无", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                { text: "暂无", link: "/articles/vue/index" },
            ],
          },
          { text: "欢迎投稿", link: "https://github.com/ShineYull/BlogGame-Docs" },   //这种是没有下拉菜单的版本
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ShineYull/BlogGame-Docs" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/BlogGame/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 BlogGame", link: "/BlogGame/getting-started" },
                    ],
                },
                // {
                //     text: "安装",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "本地部署", link: "/BlogGame/install" },
                //     ],
                // },
                // {
                //     text: "使用",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "文字生成图片", link: "/BlogGame/txt2img" },
                //         { text: "lora模型使用", link: "/BlogGame/lora" },
                //         { text: "图片生成图片", link: "/BlogGame/img2img" },
                //     ],
                // },
                // {
                //     text: "解决问题",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "生成的图片模糊灰暗", link: "/BlogGame/image-generation-problem" },
                //     ],
                // },
                // {
                //     text: "扩展",    //标签名字
                //     collapsible: true,    //是不是可以动态展开
                //     collapsed: false,      //默认是不是展开
                //     items: [              //孩子
                //         { text: "ControlNet", link: "/BlogGame/controlnet" },
                //         { text: "Mov2mov", link: "/BlogGame/mov2mov" },
                //     ],
                // },
            ],
            "/about-BlogGame/": [
                {
                    text: "关于独立游戏博客",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "独立游戏博客起源", link: "/about-BlogGame/about-BlogGame.md" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/shineyull">Shine</a>'
        },
        editLink: {
            pattern: 'https://github.com/ShineYull/BlogGame-Docs/issues',
            text: '欢迎提issues'
        },
        lastUpdatedText: "最近一次更新",
    },
}
