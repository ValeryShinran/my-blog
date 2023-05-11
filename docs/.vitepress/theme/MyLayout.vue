<!--
 * @Author: zhouyang
 * @Date: 2023-04-24 11:26:27
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-05-11 14:48:20
 * @FilePath: \my-blog\docs\.vitepress\theme\MyLayout.vue
 * @Desc: 描述
-->
<template>
  <Layout />
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import { watch, nextTick, onMounted } from "vue";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { useRouter } from "vitepress";

let { route } = useRouter();

onMounted(() => {
  watch(
    () => route.path,
    () => {
      nextTick(() => {
        if (typeof window !== undefined) {
          const content_div = document.querySelector(".content-container");
          if (content_div) {
            const before_s_div = document.getElementById("gitalk-page-container")
            if(before_s_div) {
              content_div.removeChild(before_s_div)
            }
            const s_div = document.createElement("div"); // 创建节点
            s_div.setAttribute("id", "gitalk-page-container"); // 设置id
            content_div.appendChild(s_div); // querySelector的节点可自己根据自己想加载的地方设置
            const gitment = new Gitalk({
              id: route.data.title, // 可选。默认为 location.href
              owner: "ValeryShinran", // GitHub repository 所有者
              repo: "my-blog", // GitHub repository
              clientID: "d0cf14a7e0a144373013", // 自己的clientID
              clientSecret: "76590adc93c53fb82265db55766c8ca78dd133c4", // 自己的clientSecret
              admin: ["ValeryShinran"], // GitHub repository 所有者
              labels: ["Gitalk"], // GitHub issue 的标签
              createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
            });
            gitment.render("gitalk-page-container");
          }
        }
      })
    },
    { immediate: true }
  );
});
</script>
