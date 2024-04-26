import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "react-ux-semantics",
  tagline: "React hooks-powered for common user experience.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://dkonasov.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.CI ? "/react-ux-semantics/" : "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dkonasov", // Usually your GitHub org/user name.
  projectName: "react-ux-semantics", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "react-ux-semantics",
      items: [
        { to: "/docs/intro", label: "Getting started", position: "left" },
        { to: "/docs/category/docs", label: "Docs", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/dkonasov/react-ux-semantics",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "/docs/intro",
            },
            {
              label: "Docs",
              to: "/docs/category/docs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dmitrii Konasov. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
