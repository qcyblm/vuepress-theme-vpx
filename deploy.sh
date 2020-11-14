#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# Deploy to Gitee
if [ -z "$GITEE_TOKEN" ]; then  # -z 字符串 长度为0则为true；$GITEE_TOKEN来自于GitHub仓库`Settings/Secrets`设置的私密环境变量
  msg='来自GitHub Action的自动部署'
  giteeUrl=git@gitee.com:qcyblm/vuepress-theme-vpx.git
else
  msg='来自GitHub Action的自动部署'
  giteeUrl=https://qcyblm:${GITEE_TOKEN}@gitee.com/qcyblm/vuepress-theme-vpx.git # 使用GitHub CI
fi
git init
git config user.name "qcyblm"
git config user.email "qcyblm@163.com"
git add -A
git commit -m "${msg}"
git push $giteeUrl master # 推送到Gitee

cd - 
