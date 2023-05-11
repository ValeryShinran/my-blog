/*
 * @Author: zhouyang
 * @Date: 2023-05-11 11:23:11
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-05-11 14:14:45
 * @FilePath: \vite-press-template\docs\.vitepress\config.js
 * @Desc: 描述
 */
const config = {
  title: 'Author', // 网页左上角标题
  titleTemplate: '作者', // 页签右标题
  base: '/vite-press-template/',
  description: 'Blog', // 描述
  lastUpdated: true, // 最后更新时间
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/home' },
    ],
    // 侧边栏
    sidebar: {
      '/blog/': [
        { text: '简述', link: '/blog/home' },
      ],
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Author'
    },
    // 搜索框
    search: {
      provider: 'local'
    },
    // 自定义更新时间头
    lastUpdatedText: "最后更新时间",
    // 右上角社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Author' }
    ],
    // 翻页按钮文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    }
  },
}

module.exports = config