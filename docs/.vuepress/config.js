module.exports = {
  title: '凡铁的博客',
  description: '一个写代码、码字的地方',
  base: '/blog/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '其他相关链接',
        items: [
          { text: 'Github', link: 'https://github.com/wyh-code' },
          { text: '掘金', link: 'https://juejin.cn/user/3157453124154920' }
        ]
      }
    ],
    sidebar: [
      {
        title: '很高兴认识你',
        path: '/',
        // collapsable: false, // 不折叠
      },
      {
        title: "文章",
        path: '/blog/一份自动部署VuePress到GithubPages的脚本',
        // collapsable: false, // 不折叠
        children: [
          { 
            title: "一份自动部署VuePress到GithubPages的脚本", 
            path: "/blog/一份自动部署VuePress到GithubPages的脚本"
          },
          { 
            title: "耗时七天，我写完了自己的第一个小程序", 
            path: "/blog/耗时七天，我写完了自己的第一个小程序"
          },
        ],
      },
      {
        title: "javascript",
        path: '/javaScript/节流防抖',
        children: [
          { title: "节流防抖", path: "/javaScript/节流防抖" }
        ],
      },
      {
        title: "HTML5+JavaScript动画基础",
        path: '/animated/js动画原理',
        children: [
          { title: "js动画原理", path: "/animated/js动画原理" }
        ],
      },
      {
        title: "小程序",
        path: '/mini/初始小程序云开发',
        children: [
          { title: "初始小程序云开发", path: "/mini/初始小程序云开发" }
        ],
      }
    ]
  }
}