# mj-web-template

![Static Badge](https://img.shields.io/badge/node-v16.10.0-brightgreen) ![Static Badge](https://img.shields.io/badge/npm-v8.0.0-brightgreen)

HTML、CSS、JavaScriptファイルに向けて、コードの一貫性の維持を目的とした、各チェックツール使用にあたってのベーステンプレートです。

各チェックツールのルールについて、ご意見などあれば [Issue](https://github.com/github-mjinc/mj-web-template/issues) までお願いします。

---

## 各チェックツールについて

* Prettier - コードの自動整形
* Markuplint - HTMLのエラーチェック
* Stylelint - CSSのエラーチェック
* ESLint - JavaScriptのエラーチェック

---

## チェック方法

### 環境構築について

Node.js、npmを使用出来る環境が必要です。

それぞれの環境構築については、解説されている記事が多数ありますのでそれらを参考にご用意ください。

### npm

```
// パッケージインストール（初回のみ）
$npm i

// 各ツールでのチェックを走らせる
// データを納品いただく前に必ず実行して下さい
$npm run lint
```

### 実際の実行画面

記述にエラーがあった場合は、それぞれ以下のように表示されますので各コードの修正をお願いします。

#### Markuplint

![スクリーンショット_2023-07-11_15_37_37](https://github.com/github-mjinc/mj-web-template/assets/57660565/04a6fcc7-44aa-426c-8efb-be859761ddc1)

#### Stylelint

![スクリーンショット_2023-07-11_15_37_38](https://github.com/github-mjinc/mj-web-template/assets/57660565/d2d825b0-9927-4aac-8b05-c9338a67832f)

#### ESLint

![スクリーンショット_2023-07-11_15_37_40](https://github.com/github-mjinc/mj-web-template/assets/57660565/c9c173d5-24db-4822-8ac7-ee90a8043a12)

---

## ディレクトリ構成について

制作するソースコードは `public` 以下で制作して下さい。

外部ライブラリのjsファイルやcssファイルについては、 `lib` ディレクトリを作成し、その配下に配置して下さい。

（例： `public/assets/styles/lib/swiper.css` 、 `public/assets/scripts/lib/jquery.js`）

