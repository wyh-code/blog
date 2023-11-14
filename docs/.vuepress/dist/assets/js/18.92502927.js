(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{451:function(s,t,e){s.exports=e.p+"assets/img/press-1.0d0bdfb8.png"},452:function(s,t,e){s.exports=e.p+"assets/img/press-2.24605dce.png"},453:function(s,t,e){s.exports=e.p+"assets/img/press-3.2263f1a8.png"},454:function(s,t,e){s.exports=e.p+"assets/img/press-4.29c040ed.png"},455:function(s,t,e){s.exports=e.p+"assets/img/press-5.ad4fec27.png"},456:function(s,t,e){s.exports=e.p+"assets/img/press-6.e0db293a.png"},457:function(s,t,e){s.exports=e.p+"assets/img/press-7.f350d2ac.png"},458:function(s,t,e){s.exports=e.p+"assets/img/press-8.7eb065f0.png"},459:function(s,t,e){s.exports=e.p+"assets/img/press-9.3570c699.png"},460:function(s,t,e){s.exports=e.p+"assets/img/press-10.afe90a07.png"},461:function(s,t,e){s.exports=e.p+"assets/img/press-11.9cf4ca6a.png"},462:function(s,t,e){s.exports=e.p+"assets/img/press-12.61d6176a.png"},482:function(s,t,e){"use strict";e.r(t);var a=e(2),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"如题-脚本如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如题-脚本如下"}},[s._v("#")]),s._v(" 如题，脚本如下：")]),s._v(" "),t("div",{staticClass:"language-deploy.sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#!/bin/bash\n\n# 脚本只要发生错误，就终止执行。\nset -e\n\n# 生成静态文件\nnpm run build\n\n# 判读是否存在 .git目录\nif [ -d .git/ ];then\necho '已经是一个git仓库，需要删除已有pages分支后重新拉取新分支'\n# 删除已有分支，避免代码合并冲突\ngit branch -D pages\n# 添加工作区所有变化到暂存区\ngit add -A\n# 将暂存区里的改动提交到本地的版本库\ngit commit -m 'add'\n\n# 如果不存在 .git 证明不是git仓库，需要初始化git仓库\nelse\necho '初始化git仓库'\n# 初始化git仓库\ngit init\n# 添加工作区所有变化到暂存区\ngit add -A\n# 将暂存区里的改动提交到本地的版本库\ngit commit -m 'add'\n# 命名当前分支\ngit branch -M master\n# 关联远端仓库\ngit remote add origin [git@github.com:xxx] #自己的代码仓库\nfi\n\n## 将更新推送到远程主分支\ngit push --set-upstream -f origin master\n\n# 进入pages分支\ngit checkout -b pages\n\n# 将dist移动到根目录\ncp -rf docs/.vuepress/dist ./dist\n# 删除原有的docs文件夹\nrm -rf docs/\n# 将dist重命名\nmv ./dist/ ./docs/\n\n# 提交更新\ngit add -A\ngit commit -m 'deploy'\ngit push --set-upstream -f origin pages\n\n# 回到主分支\ngit checkout master\n\n")])])]),t("h2",{attrs:{id:"新建vuepress文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建vuepress文档"}},[s._v("#")]),s._v(" 新建VuePress文档")]),s._v(" "),t("p",[s._v("参考"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress"),t("OutboundLink")],1),t("code",[s._v("快速上手")])]),s._v(" "),t("p",[s._v("1、创建并进入一个新目录")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir vuepress-starter && cd vuepress-starter\n")])])]),t("p",[s._v("2、使用你喜欢的包管理器进行初始化")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yarn init # npm init\n")])])]),t("p",[s._v("3、将 VuePress 安装为本地依赖")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yarn add -D vuepress # npm install -D vuepress\n")])])]),t("p",[s._v("4、创建你的第一篇文档")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir docs && echo '# Hello VuePress' > docs/README.md\n")])])]),t("p",[s._v("5、在 "),t("code",[s._v("package.json")]),s._v(" 中添加一些 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("scripts"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n')])])]),t("p",[s._v("6、在本地启动服务器")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yarn dev # npm run dev\n")])])]),t("p",[s._v("以上命令可以新建一个基础VuePress文档，并在会在 "),t("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080 (opens new window)"),t("OutboundLink")],1),s._v("启动一个热重载的开发服务器。")]),s._v(" "),t("h2",{attrs:{id:"新建github仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建github仓库"}},[s._v("#")]),s._v(" 新建github仓库")]),s._v(" "),t("p",[t("img",{attrs:{src:e(451),alt:"截屏2023-11-13 23.17.04.png"}})]),s._v(" "),t("h2",{attrs:{id:"添加项目配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加项目配置"}},[s._v("#")]),s._v(" 添加项目配置")]),s._v(" "),t("p",[s._v("1、配置部署站点的基础路径 "),t("code",[s._v("此处应为github 仓库名")]),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多配置"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:e(452),alt:"截屏2023-11-14 11.49.30.png"}})]),s._v(" "),t("h2",{attrs:{id:"添加脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加脚本"}},[s._v("#")]),s._v(" 添加脚本")]),s._v(" "),t("p",[s._v("1、在VuePress文档中新建"),t("code",[s._v("deploy.sh")]),s._v("（复制最上边脚本）")]),s._v(" "),t("p",[t("img",{attrs:{src:e(453),alt:"截屏2023-11-14 10.55.07.png"}})]),s._v(" "),t("p",[s._v("2、复制github仓库地址")]),s._v(" "),t("p",[t("img",{attrs:{src:e(454),alt:"截屏2023-11-13 23.29.28.png"}})]),s._v(" "),t("p",[s._v("3、修改脚本远端仓库地址")]),s._v(" "),t("p",[t("img",{attrs:{src:e(455),alt:"截屏2023-11-14 10.59.11.png"}})]),s._v(" "),t("p",[s._v("4、添加忽略文件"),t("code",[s._v(".gitignore")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(456),alt:"截屏2023-11-14 00.14.20.png"}})]),s._v(" "),t("h2",{attrs:{id:"部署文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署文档"}},[s._v("#")]),s._v(" 部署文档")]),s._v(" "),t("p",[s._v("在根目录执行 "),t("code",[s._v("sh deploy.sh")]),s._v(" 命令")]),s._v(" "),t("p",[t("img",{attrs:{src:e(457),alt:"截屏2023-11-14 11.04.05.png"}})]),s._v(" "),t("h2",{attrs:{id:"配置github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置github"}},[s._v("#")]),s._v(" 配置github")]),s._v(" "),t("p",[s._v("1、进入Setting页")]),s._v(" "),t("p",[t("img",{attrs:{src:e(458),alt:"截屏2023-11-14 11.09.28.png"}})]),s._v(" "),t("p",[s._v("2、选择分支及文档目录")]),s._v(" "),t("p",[t("img",{attrs:{src:e(459),alt:"截屏2023-11-14 11.19.41.png"}})]),s._v(" "),t("p",[s._v("3、刷新页面号，获取站点URL")]),s._v(" "),t("p",[t("img",{attrs:{src:e(460),alt:"截屏2023-11-14 11.23.19.png"}})]),s._v(" "),t("p",[s._v("4、复制URL，在浏览器窗口打开，即可看到部署好的博客站点")]),s._v(" "),t("p",[t("img",{attrs:{src:e(461),alt:"截屏2023-11-14 11.47.57.png"}})]),s._v(" "),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" "),t("code",[s._v("注意:")])]),s._v(" "),t("p",[t("strong",[s._v("生成站点地址会有几分钟的延迟，若刷新页面没有出现站点地址，请耐心等待几分钟")])]),s._v(" "),t("p",[t("strong",[s._v("文档只可放在根目录（/）或（/docs）目录下：")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(462),alt:"截屏2023-11-14 11.28.54.png"}})]),s._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),t("p",[s._v("若有错误，请务必给予指正。"),t("br"),s._v("\n谢谢！")]),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2017/11/bash-set.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bash 脚本 set 命令教程"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-shell-passing-arguments.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Shell 教程"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);