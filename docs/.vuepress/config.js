module.exports = {
  title: '搭建自己的博客',
  description: '测试搭建自己的博客',
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
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "读书后",
        path: '/books/read',
        // collapsable: false, // 不折叠
        children: [
          { 
            title: "关于读书的一些事", 
            path: "/books/read"
          },
          { 
            title: "史记", 
            path: "/books/史记/五帝本纪",
            children: [
              { title: "五帝本纪", path: "/books/史记/五帝本纪" },
              { title: "高祖本纪", path: "/books/史记/高祖本纪" }
            ]
          },
          { 
            title: "恶意", 
            path: "/books/恶意/第一章",
            children: [
              { title: "第一章", path: "/books/恶意/第一章" },
              { title: "第二章", path: "/books/恶意/第二章" }
            ]
          }
        ],
      },
      {
        title: "javascript",
        path: '/javaScript/js事件循环',
        // collapsable: false, // 不折叠
        children: [
          { title: "js事件循环", path: "/javaScript/js事件循环" },
          { title: "节流防抖", path: "/javaScript/节流防抖" }
        ],
      },
      {
        title: "React",
        path: '/react/react',
        // collapsable: false, // 不折叠
        children: [
          { title: "React 18.2", path: "/react/react" },
          { title: "JSX", path: "/react/JSX" }
        ],
      }
    ]
  }
}