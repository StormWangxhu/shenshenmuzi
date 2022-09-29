import { hopeTheme } from "vuepress-theme-hope";
import {
  enNavbarConfig,
  zhNavbarConfig,
  ruNavbarConfig,
} from "./navbar/index.js";
import {
  enSidebarConfig,
  zhSidebarConfig,
  ruSidebarConfig,
} from "./sidebar/index.js";

const hostname =
  process.env.HOSTNAME || "https://vuepress-theme-hope-v2.netlify.app";

export default hopeTheme({
  hostname,

  author: {
    name: "春秋",
    url: "https://github.com/StormWangxhu",
  },

  iconAssets: "iconfont",

  repo: "StormWangxhu/vuepress-theme-hope",

  docsDir: "docs/theme/src",

  logo: "logo.png",

  footer: "Copyright © 2022-present 莘莘穆子",
  copyright: false,
  displayFooter: true,

  pageInfo: [
    "Original",
    "Author",
    "Date",
    "Category",
    "Tag",
    "PageView",
    "ReadingTime",
    "Word",
  ],

  // 标题渲染深度。
  headerDepth: 4,

  // 是否显示最后更新时间
  lastUpdated: true,
  // 是否显示贡献者。
  contributors: true,
  // 设置是否显示返回顶部按钮
  backToTop: true,

  blog: {
    name: "我们",
  },

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,

  locales: {
    // "/": {
    //   navbar: enNavbarConfig,
    //   sidebar: enSidebarConfig,
    // },
    "/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
    },
    "/zh/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
    },
    // "/ru/": {
    //   navbar: ruNavbarConfig,
    //   sidebar: ruSidebarConfig,
    // },
  },

  plugins: {
    blog: false,

    components: ["Badge", "CodePen", "PDF", "StackBlitz", "YouTube"],

    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    copyright: true,

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      update: "hint",
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Cookbook",
            short_name: "Cookbook",
            url: "/cookbook/",
            icons: [
              {
                src: "/assets/icon/basic-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/basic-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    seo:
      hostname === "https://vuepress-theme-hope.github.io"
        ? {}
        : { canonical: "https://vuepress-theme-hope.github.io/v2/" },
  },
});
