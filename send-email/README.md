# send-email

メールを送信するプログラム

## 環境

### OS

Ubuntu18.04

### 言語

JavaScript

### $ node -v
v10.14.2

### パッケージ

```
$ npm install nodemailer
```

nodemailerをインストール

# 動かし方

- authMailAddress, authMailAddressPass にSMTPサーバーの情報を格納する

- toMailAddress に送信先のメールアドレスを格納する

- Node.js と nodemailerがインストールされた環境で、

```
$ node script.js
```

を実行する。

# todo

### 複数のメールアドレスを扱う際の仕組みを考える

メールアドレスを別のファイルに格納して、読み出して一斉に送信できるようにする。

### メール配信停止希望が来た場合

メールの配信停止などの希望が来た際に、配信停止リストに配信停止希望のアドレスを格納して、そのリストに入っているメールアドレスにはメールを送らないようにする。
