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
      { text: 'Categories', link: '/category/' },
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
      // ディレクトリ指定しなくてもカテゴライズしてくれるのでコメントアウト
      // directories: [
      //   {
      //     id: 'post',
      //     dirname: 'posts',
      //     itemPermalink: '/posts/:slug',
      //   },
      // ],
      frontmatters: [
        {
          id: 'category',
          keys: ['categories'],
          path: '/category/',
          layout: 'Category',
          scopeLayout: 'Category',
        },
      ],
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-182238770-1',
    }],
  ],
};
