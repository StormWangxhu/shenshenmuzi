import { sidebar } from "docs-shared";

// 侧边栏设置
export const zhSidebarConfig = sidebar({
  "/zh/": [
    "",
    {
      text: "文章和书籍",
      icon: "creative",
      prefix: "article/",
      children: ["prophet-civilization-history/", "books/"],
    },
    // {
    //   text: "指南",
    //   icon: "creative",
    //   // 父路径，prefix（前缀）
    //   prefix: "guide/",
    //   // 子路径
    //   children: [
    //     "get-started/",// 快速上手
    //     "interface/",// 界面
    //     "layout/",// 布局
    //     "markdown/",// markdown 增强
    //     "feature/", // 功能
    //     "blog/",// 博客
    //     "advanced/",// 高级
    //   ],
    // },
    // {
    //   text: "配置",
    //   icon: "config",
    //   prefix: "config/",
    //   children: [
    //     "intro",
    //     "i18n",
    //     "theme/",
    //     "plugins/",
    //     "frontmatter/",
    //     "style",
    //   ],
    // },
    // {
    //   text: "教程",
    //   icon: "guide",
    //   prefix: "cookbook/",
    //   children: ["tutorial/", "markdown/", "vuepress/", "advanced/"],
    // },
    // {
    //   text: "迁移",
    //   icon: "change",
    //   prefix: "migration/",
    //   children: ["highlight", "config", "page", "style"],
    // },
    // {
    //   text: "常见问题",
    //   icon: "question",
    //   prefix: "faq/",
    //   children: ["", "troubleshooting", "common-error", "vite", "safari"],
    // },
    // "demo",
    "changelog",
    "about",
    // "contribution",
  ],

  "/zh/article/": [
    {
      text: "先知-文明史系列文章",
      icon: "vue",
      prefix: "prophet-civilization-history/",
      collapsable: true, // 开启可折叠
      children: [
        "先知-文明史建群举意和宗旨",
         "为什么要写先知-文明史",
         "Quran的叙事与人类文明的关联问题_上"
      ],
    },
    {
      text: "书籍",
      icon: "book",
      prefix: "books/",
      collapsable: true,
      children: [
        {
          text: "先知-文明史系列提到的书籍",
          icon: "book",
          prefix: "prophet-civilization-history/",
          collapsable: true,
          children: ["发现夏朝", "文明起源"],
        },
      ],
    },
  ],

  // "/zh/guide/": "structure",

  // "/zh/config/": "structure",

  // "/zh/cookbook/": [
  //   // /zh/cookbook/ 路径下的子路径
  //   {
  //     text: "教程",
  //     icon: "guide",
  //     prefix: "tutorial/",
  //     children: [
  //       "env",
  //       "create",
  //       "command",
  //       "content",
  //       "config",
  //       "structure",
  //       "deploy",
  //     ],
  //   },
  //   {
  //     text: "Markdown",
  //     icon: "markdown",
  //     prefix: "markdown/",
  //     collapsable: true,
  //     children: [
  //       "",
  //       "demo",
  //       {
  //         text: "Emoji",
  //         icon: "emoji",
  //         link: "emoji/",
  //         prefix: "emoji/",
  //         collapsable: true,
  //         children: "structure",
  //       },
  //     ],
  //   },
  //   {
  //     text: "VuePress",
  //     icon: "vue",
  //     prefix: "vuepress/",
  //     collapsable: true,
  //     children: ["", "file", "markdown", "config", "plugin", "theme"],
  //   },
  //   {
  //     text: "高级",
  //     icon: "advance",
  //     prefix: "advanced/",
  //     collapsable: true,
  //     children: ["component", "style", "replace", "extend"],
  //   },
  // ],
});
