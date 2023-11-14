#!/bin/bash

# 脚本只要发生错误，就终止执行。
set -e

# 生成静态文件
npm run build

# 判读是否存在 .git目录
if [ -d .git/ ];then
echo '已经是一个git仓库，需要删除已有pages分支后重新拉取新分支'
# 删除已有分支，避免代码合并冲突
git branch -D pages
# 添加工作区所有变化到暂存区
git add -A
# 将暂存区里的改动提交到本地的版本库
git commit -m 'add'

# 如果不存在 .git 证明不是git仓库，需要初始化git仓库
else
echo '初始化git仓库'
# 初始化git仓库
git init
# 添加工作区所有变化到暂存区
git add -A
# 将暂存区里的改动提交到本地的版本库
git commit -m 'add'
# 命名当前分支
git branch -M master
# 关联远端仓库
git remote add origin git@github.com:wyh-code/blog.git
fi

## 将更新推送到远程主分支
git push --set-upstream -f origin master

# 进入pages分支
git checkout -b pages

# 将dist移动到根目录
cp -rf docs/.vuepress/dist ./dist
# 删除原有的docs文件夹
rm -rf docs/
# 将dist重命名
mv ./dist/ ./docs/

# 提交更新
git add -A
git commit -m 'deploy'
git push --set-upstream -f origin pages

# 回到主分支
git checkout master
