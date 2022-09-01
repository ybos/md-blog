export default {
  title: "JokerHuang's Blog",
  description: "自我学习的一片天地",
  themeConfig: {
    footer: {
        message: "<a href='https://beian.miit.gov.cn/' target='_blank'>苏ICP备14057462号-1</a>",
        copyright: "Copyright ©2014-2022 YBO.ME 版权所有"
    },
    nav: [
      { text: "Guide", link: "/guide/" },
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
