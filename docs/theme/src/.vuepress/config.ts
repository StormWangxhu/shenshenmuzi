import { getDirname, path } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";
import { config } from "docs-shared";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default config(
  { indexName: "vuepress-theme-hope-theme-v2" },
  {
    head: [
      [
        "meta",
        {
          name: "google-site-verification",
          content: "qG3soux9jAKB4Q_DYf7yj1p5cEIuib6yG4zDhpmv2_E",
        },
      ],
    ],

    locales: {
      "/": {
        lang: "en-US",
        title: "vuepress-theme-hope",
        description: "A vuepress theme with tons of features✨",
      },
      "/zh/": {
        lang: "zh-CN",
        title: "我们",
        description: "专注于学习、分享、交流",
      },
      // "/ru/": {
      //   lang: "ru-RU",
      //   title: "vuepress-theme-hope",
      //   description: "Тема vuepress с множеством функций✨",
      // },
    },

    theme,
    // theme: hopeTheme({
    //   encrypt: {
    //     config: {
    //       // 这会加密整个 guide 目录，并且两个密码都是可用的
    //       "zh/article/prophet-civilization-history/": ["1234", "5678"],
    //     },
    //   },
    // }),

    pagePatterns: [
      "**/*.md",
      "!**/*.snippet.md",
      "!.vuepress",
      "!node_modules",
    ],

    alias: {
      "@IconDisplay": path.resolve(__dirname, "./components/IconDisplay"),
      "@KatexPlayground": path.resolve(
        __dirname,
        "./components/KatexPlayground"
      ),
      "@NetlifyBadge": path.resolve(__dirname, "./components/NetlifyBadge"),
    },

    define: () => ({
      IS_NETLIFY: "NETLIFY" in process.env,
    }),
  }
);
