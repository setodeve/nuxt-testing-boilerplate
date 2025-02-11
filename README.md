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

## テストの実行方法

### ユニットテスト

ユニットテストは、[vitest](https://vitest.dev/)を使用します。
テストは'tests/unit'ディレクトリに追加します。

【テスト内容】

ユニットテストでは以下のようなテストを想定しています。

- 個々の関数やメソッドの動作確認
- コンポーネントのレンダリング検証

【実行方法】  

```bash
sudo docker-compose exec nuxt pnpm test
# または、コンテナに入った後 pnpm test
```

### E2Eテスト

E2Eテストは、[Playwright](https://playwright.dev/docs/writing-tests)を使用します。
テストは'tests/e2e'ディレクトリに追加します。

【テスト内容】

E2Eテストでは以下のようなテストを想定しています。

- ユーザ操作のシミュレーション  
- ページ遷移やフォーム送信など、複数コンポーネント間の連携確認

【実行方法】

```bash
sudo docker-compose exec nuxt pnpm e2e
# または、コンテナに入った後に pnpm e2e
```

【テスト生成】

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
