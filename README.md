# mj-web-template

HTML、CSS、JavaScriptファイルに向けて、コードの一貫性の維持を目的とした、各チェックツール使用にあたってのベーステンプレートです。

---

## 各チェックツールについて

## コードフォーマッター
*Prettier*
https://prettier.io/

### HTML
*Markuplint*
https://markuplint.dev/ja/

### CSS
*Stylelint*
https://stylelint.io/

### JavaScript
*ES Lint*
https://eslint.org/

---

## チェック方法

### 環境構築について

Node.js、npmを使用出来る環境が必要です。
それぞれの環境構築については、解説されている記事が多数ありますので
それらを参考にご用意ください。

例
https://zenn.dev/thao_0108/articles/10bb038982eff3

### npm

```
// パッケージインストール
$npm i

// 各ツールでのチェックを走らせる
$npm run lint
```