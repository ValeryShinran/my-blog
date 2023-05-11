/*
 * @Author: zhouyang
 * @Date: 2023-04-24 11:26:19
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-04-24 15:09:19
 * @FilePath: \vite-press\docs\.vitepress\theme\index.js
 * @Desc: 描述
 */
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
}