module.exports = {
  title: 'テストページ',
  // title: 'フロントエンドチュートリアル学習サイト',
  description: 'テスト',
  // description: 'チュートリアル形式で学習できるサイト',
  dest: 'dist/',
  port: 8000,
  locales: {
    '/': {
      lang: 'ja'
    },
  },
  themeConfig: {
    nav: [
      { text: 'Tags', link: '/tag/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: '最終更新日',
  },
  // マークダウン機能の設定
  markdown: {
    lineNumbers: true,
    linkify: true,
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: 'posts',
          itemPermalink: '/:year/:slug',
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tag',
          scopeLayout: 'Tag',
        },
      ],
    }],
    ['@vuepress/google-analytics', {
      ga: 'G-8586RP1LNW',
    }],
  ],
};
