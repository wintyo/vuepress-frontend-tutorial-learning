module.exports = {
  title: 'フロントエンドチュートリアル学習サイト',
  description: 'チュートリアル形式で学習できるサイト',
  dest: 'dist/',
  port: 8000,
  themeConfig: {
    sidebar: 'auto',
  },
  // マークダウン機能の設定
  markdown: {
    lineNumbers: true,
    linkify: true,
  },
};
