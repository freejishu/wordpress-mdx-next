<div align="right">Language: <a title="English" href="../README.md">English</a> | Chinese | <a title="Turkish" href="tr_TR.md">Turkish</a></div>

<br>

<h1 align="center"><a href="https://github.com/freejishu/wordpress-mdx-next" target="_blank">MDx Next</a></h1>

> 轻于形，悦于心

<p align="center">
<img alt="Version" src="https://img.shields.io/badge/version-1.0.0-3f51b5.svg?style=flat-square"/>
<a href="https://www.freejishu.com"><img alt="Author" src="https://img.shields.io/badge/author-freejishu-red.svg?style=flat-square"/></a>
<img alt="WordPress" src="https://img.shields.io/badge/WordPress-5.0%2B-blue.svg?style=flat-square"/>
<img alt="Based on" src="https://img.shields.io/badge/based%20on-MDx%202.0.4-lightgrey.svg?style=flat-square"/>
<a href="https://github.com/freejishu/wordpress-mdx-next/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-GPL%20V3.0-orange.svg?style=flat-square"/></a>
</p>


## 目录

- [目录](#%e7%9b%ae%e5%bd%95)
- [介绍](#%e4%bb%8b%e7%bb%8d)
- [MDx Next 的新变化](#mdx-next-%e7%9a%84%e6%96%b0%e5%8f%98%e5%8c%96)
- [演示](#%e6%bc%94%e7%a4%ba)
- [下载](#%e4%b8%8b%e8%bd%bd)
- [国际化](#%e5%9b%bd%e9%99%85%e5%8c%96)
- [文档](#%e6%96%87%e6%a1%a3)
- [许可证](#%e8%ae%b8%e5%8f%af%e8%af%81)
- [渲染](#%e6%b8%b2%e6%9f%93)


## 介绍

MDx Next，一款轻快、优雅且强大的 Material Design 风格 WordPress 主题。它是 [MDx](https://github.com/yrccondor/mdx) 2.0.4（作者 [AxtonYao](https://flyhigher.top)）的派生作品，以 GPL-3.0 许可证继续开发，带来了 Material Design 3（Material You）支持与一系列修复和增强。

特性（继承自 MDx）：

- 完全的 Material Design 风格，每一个像素都赏心悦目，Material Design 1 / 2 / 3 三种风格一键切换
- 4 种首页样式，5 种文章列表样式，3 种页脚样式 & 4 种文章页样式随意切换
- 20 种主题颜色 & 16 种强调色随心搭配（经典风格），或全自动派生的 MD3 色调色板
- 不仅有夜间模式和黑暗主题，更有专为 OLED 屏幕优化的样式可选
- SEO 友好，支持 Facebook / Twitter 结构化卡片分享
- 优雅轻量，无 jQuery 依赖
- 一键生成分享图片，分享文章更美观
- 内置文章目录、图片灯箱与 7 种短代码
- 多语言支持（简体中文、正体中文（台湾）、繁体中文（香港）、土耳其语及英语）
- ✨ 交互式搜索，搜索栏会随用户输入实时反馈搜索结果
- ✨ 不仅可以生成当前页面二维码，方便地转移到其他设备上阅读，还可以在转移时同步阅读进度


## MDx Next 的新变化

相比上游 MDx 2.0.4：

- 🎨 **Material Design 3（Material You）风格层**——后台统一的 MD1 / MD2 / MD3 风格选择器，经典风格完整保留
- 🌱 **种子色**——原生取色器任选颜色，全站色调色板（浅色 & 深色）通过 `color-mix()` 自动派生
- 🖼️ **可选动态取色**——自动从首页首图提取主题色（带优雅的回退机制）
- 🌗 **自适应前景色**——彩色表面上的文字根据亮度自动切换深浅
- 🧭 **主题化工具栏与阅读进度环**——滚动后工具栏变为实心种子色并自适应文字颜色，阅读进度环跟随主题色
- 🟦 **MD3 正文图片**——可选的正文图片 12px 圆角（仅 MD3，内联样式输出，无缓存困扰）
- 🔧 **修复与增强**——SEO 与分享修复、视频背景支持、友情链接四列布局、上游 imgbox 修复


## 演示

- [freejishu 的美丽世界](https://www.freejishu.com)


## 下载

你可以前往 [Releases](https://github.com/freejishu/wordpress-mdx-next/releases) 页下载 MDx Next，或使用 **Code → Download ZIP** 获取最新的 `main` 分支。**请不要为了下载而 `clone` 这个仓库。**

下载后，将主题目录上传至 `wp-content/themes/`，然后在 外观 → 主题 中启用。


## 国际化

MDx Next 支持多语言，默认语言为简体中文。

支持的语言如下：

- 简体中文
- 土耳其语（感谢 [Hasan CAN](https://github.com/Sn0bzy)）
- 英语（感谢 [Ye Shu](https://github.com/yechs)）
- 正体中文（台湾）（感谢 [AngelKitty](https://github.com/AngelKitty)）
- 繁体中文（香港）

> 非常欢迎你帮助我们将 MDx Next 翻译至其他语言！


## 文档

MDx Next 的大部分选项与 MDx 一致，[MDx 主题文档](https://doc.flyhigher.top/mdx/) 依然适用。MDx Next 新增的选项（风格选择器、种子色、动态取色、正文图片圆角等）位于 WordPress 后台的 MDx 主题设置面板中。


## 许可证

<a href="https://github.com/freejishu/wordpress-mdx-next/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-GPL%20V3.0-orange.svg?style=flat-square"/></a>

根据 GPL V3.0 许可证开源。MDx Next 是 [MDx](https://github.com/yrccondor/mdx)（作者 [AxtonYao](https://flyhigher.top)）的派生作品，原主题同样以 GPL V3.0 许可发布。


## 渲染

![](assets/render-index.jpg)

![](assets/render-post.jpg)
