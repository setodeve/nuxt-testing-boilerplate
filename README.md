# Nuxtテスト環境向けボイラープレート

Nuxtアプリ上でのテスト、Storybook環境構築のためのボイラープレートです。
テスト実行方法とStorybookの起動方法について説明します。

## セットアップ

### dockerコンテナの起動

```bash
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

### dockerコンテナに入る

```bash
docker-compose exec nuxt sh
```

## テストについて

### ディレクトリ構成例

```bash
app/
├─ components/
│   ├─ Header.vue
│   ├─ Header.test.ts   // 単体テスト
│   └─ ...
├─ pages/
│   ├─ about
│   │    └─ index.vue
│   └─ ...
└─ tests/
    ├─ integration/
    │   ├─ pages/
    │   │   └─ about.test.ts  // 統合テスト
    │   └─ ...
    └─ e2e/
        └─ example.test.ts  // ユーザ操作のシミュレーション
```

### 単体テスト/統合テスト

[vitest](https://vitest.dev/)を使用します。
単体テストは'tests/unit'ディレクトリに追加します。
統合テストは'tests/integration'ディレクトリに追加します。

【テスト内容】

単体テストでは以下のようなテストを想定しています。

- 個々の関数やメソッド、コンポーネントの動作確認

統合テストでは以下のようなテストを想定しています。

- 複数コンポーネントの連携確認、ページ単位の動作確認

【実行方法】  

```bash
docker-compose exec nuxt pnpm test
# または、コンテナに入った後 pnpm test
```

### E2Eテスト

E2Eテストは、[Playwright](https://playwright.dev/docs/writing-tests)を使用します。
テストは'tests/e2e'ディレクトリに追加します。

【テスト内容】

E2Eテストでは以下のようなテストを想定しています。

- ユーザ操作のシミュレーション  

【実行方法】

```bash
sudo docker-compose exec nuxt pnpm e2e
# または、コンテナに入った後に pnpm e2e
```

【テスト生成】

ブラウザ操作を元にテストコードを生成します。

```bash
cd app
pnpm exec playwright codegen <テストしたいページのURL>
# 例: pnpm exec playwright codegen http://localhost:30000/example
```

【テスト結果表示】

```bash
cd app
pnpm exec playwright show-report tests/e2e/test-results
```

## Storybookの利用
