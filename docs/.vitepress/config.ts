export default {
  title: "JokerHuang's Blog",
  description: "自我学习的一片天地",
  themeConfig: {
    footer: {
        message: "<a href='https://beian.miit.gov.cn/' target='_blank'>苏ICP备14057462号-1</a>",
        copyright: "Copyright ©2014-2022 YBO.ME 版权所有"
    },
    nav: [
      { text: "服务器相关", link: "/server/build-trojan.html" },
      { text: "开发相关", link: "/" }
    ],
    sidebar: {
      "/server/": [
        {
          text: "服务器相关",
          items: [
            { text: "Trojan的构建及应用", link: "/server/build-trojan.html" },
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
