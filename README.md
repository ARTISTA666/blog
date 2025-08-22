# 我的个人博客

<div align="center">

![Hexo](https://img.shields.io/badge/Hexo-blue?style=for-the-badge&logo=hexo)
![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-black?style=for-the-badge&logo=github)

一个基于Hexo构建的现代化个人技术博客

[在线预览](https://your-username.github.io) | [快速开始](#快速开始) | [文档](#文档)

</div>

## ✨ 特性

- 🚀 **极速加载** - 基于Hexo静态生成，页面加载飞快
- 📱 **响应式设计** - 完美适配PC、平板、手机等设备
- 🔍 **智能搜索** - 支持全文搜索，快速定位文章内容
- 💬 **评论系统** - 集成Gitalk，基于GitHub Issues的评论
- 🏷️ **分类标签** - 完善的文章分类和标签管理系统
- 🤖 **自动部署** - GitHub Actions自动构建部署
- 🎨 **优雅主题** - 简洁美观的界面设计
- 📊 **SEO优化** - 友好的搜索引擎优化

## 🛠️ 技术栈

- **静态生成器**: Hexo 7.3.0
- **主题**: Landscape (默认主题优化版)
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions
- **评论系统**: Gitalk
- **搜索引擎**: 自研客户端搜索
- **语言**: Markdown + JavaScript

## 📁 项目结构

```
my-blog/
├── .github/workflows/     # GitHub Actions工作流
│   ├── deploy.yml
│   └── pages.yml
├── scaffolds/             # 文章模板
│   ├── post.md
│   ├── page.md
│   └── draft.md
├── scripts/               # 自定义脚本
│   └── generate-search-data.js
├── source/                # 源文件目录
│   ├── _posts/           # 博客文章
│   ├── about/            # 关于页面
│   ├── categories/       # 分类页面
│   ├── tags/            # 标签页面
│   ├── search/          # 搜索页面
│   └── js/              # 自定义脚本
│       ├── search.js
│       ├── comments.js
│       └── gitalk-config.html
├── themes/               # 主题目录
├── _config.yml          # Hexo配置文件
├── package.json         # 项目依赖
└── README.md           # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 14.0.0
- Git
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/my-blog.git
   cd my-blog
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动本地服务器**
   ```bash
   npm run server
   # 或者
   hexo server
   ```

4. **访问博客**
   打开浏览器访问 `http://localhost:4000`

### 创建文章

```bash
# 创建新文章
hexo new "文章标题"

# 创建草稿
hexo new draft "草稿标题"

# 发布草稿
hexo publish "草稿标题"
```

### 生成和部署

```bash
# 清理缓存
hexo clean

# 生成静态文件
hexo generate

# 部署（需要先配置部署设置）
hexo deploy
```

## 📝 写作指南

### 文章格式

每篇文章都应该包含以下front matter：

```markdown
---
title: 文章标题
date: 2025-08-22 14:30:00
tags:
  - 标签1
  - 标签2
categories:
  - 分类名
author: 博主
description: 文章描述
keywords: 关键词1, 关键词2
top: false          # 是否置顶
comments: true      # 是否开启评论
---

文章摘要内容

<!-- more -->

文章正文内容...
```

### 支持的Markdown语法

- 标题、段落、列表
- 代码块语法高亮
- 表格
- 链接和图片
- 引用块
- 数学公式（如需要）

### 文章分类建议

- **技术分享** - 技术教程、经验总结
- **前端技术** - HTML、CSS、JavaScript等
- **后端技术** - Node.js、Python、数据库等
- **工具使用** - Git、Docker、编辑器等
- **学习笔记** - 读书笔记、课程总结

## 🔧 配置说明

### 基本配置

编辑 `_config.yml` 文件：

```yaml
# 网站基本信息
title: 我的个人博客
subtitle: 技术分享与思考记录
description: 专注于技术分享、编程实践和个人成长的技术博客
author: 博主
language: zh-CN
timezone: Asia/Shanghai

# URL配置
url: https://your-username.github.io
```

### 评论系统配置

1. 在GitHub创建OAuth应用
2. 编辑 `source/js/comments.js`
3. 替换相关配置信息

详细步骤见：[评论系统配置指南](../COMMENTS_SETUP.md)

### 部署配置

配置GitHub Pages自动部署：

1. 在GitHub仓库启用Pages功能
2. 选择GitHub Actions作为源
3. 推送代码即可自动部署

详细步骤见：[部署配置指南](../DEPLOYMENT_GUIDE.md)

## 🔍 功能说明

### 搜索功能

- 支持全文搜索
- 实时搜索建议
- 关键词高亮显示
- 按相关性排序

访问 `/search/` 页面使用搜索功能。

### 分类和标签

- **分类**: 按技术领域分类文章
- **标签**: 更细粒度的文章标记
- 支持中英文URL映射

### 评论系统

- 基于GitHub Issues
- 支持Markdown语法
- 用户需要GitHub账号登录
- 管理员可以管理评论

## 🎨 自定义

### 修改主题样式

1. 复制主题到本地 `themes/` 目录
2. 修改CSS和模板文件
3. 在 `_config.yml` 中指定主题

### 添加自定义页面

```bash
hexo new page "页面名称"
```

### 集成第三方服务

- Google Analytics
- 百度统计
- Disqus评论
- 其他社交分享

## 📊 SEO优化

项目已包含基本的SEO优化：

- 语义化HTML结构
- 合理的meta标签
- 站点地图自动生成
- 友好的URL结构
- 图片alt属性
- 页面加载速度优化

## 🚀 部署方式

### GitHub Pages (推荐)

- 免费托管
- 自动HTTPS
- 自定义域名支持
- GitHub Actions自动部署

### 其他平台

- **Netlify**: 拖拽部署，自动构建
- **Vercel**: 极速部署，边缘网络
- **传统服务器**: 上传public目录

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🙏 致谢

- [Hexo](https://hexo.io/) - 强大的静态博客框架
- [GitHub Pages](https://pages.github.com/) - 免费的静态网站托管
- [Gitalk](https://gitalk.github.io/) - 优雅的评论系统

## 📞 联系方式

- **邮箱**: your-email@example.com
- **GitHub**: [@your-username](https://github.com/your-username)
- **博客**: https://your-username.github.io

---

<div align="center">

**[⬆ 回到顶部](#我的个人博客)**

Made with ❤️ by [Your Name](https://github.com/your-username)

</div>