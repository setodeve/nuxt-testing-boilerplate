# Nuxt テスト環境向けボイラープレート

このボイラープレートは、Nuxt アプリでテストと Storybook 環境をセットアップするためのテンプレートです。

## セットアップ

### Docker コンテナのビルドと起動

以下のコマンドで Docker イメージを再構築し、コンテナをバックグラウンドで起動します。

```bash
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

### Docker コンテナへのアクセス

コンテナ内に入る場合は、次のコマンドを実行します。

```bash
docker-compose exec nuxt sh
```

## テストについて

### ディレクトリ構成の例

テストコードはプロジェクト内で次のように整理されています。

```bash
app/
├─ components/
│   ├─ Header.vue
│   ├─ Header.test.ts   // 単体テスト用
│   └─ ...
├─ pages/
│   ├─ about/
│   │    └─ index.vue
│   └─ ...
└─ tests/
    ├─ integration/
    │   ├─ pages/
    │   │   └─ about.test.ts  // 統合テスト用
    │   └─ ...
    └─ e2e/
        ├─ example.test.ts  // E2E テスト用
        └─ ...
```

### 単体テスト・統合テスト

[vitest](https://vitest.dev/) を利用してテストを実行します。

- 単体テスト
  - 個々の関数、メソッド、コンポーネントの動作確認を行います。
- 統合テスト
  - 複数コンポーネント間の連携やページ全体の動作を確認します。

【テストの実行方法】

```bash
docker-compose exec nuxt pnpm test
# または、コンテナ内で pnpm test
```

### E2E テスト

E2E テストには [Playwright](https://playwright.dev/docs/writing-tests) を利用します。
テストコードは `tests/e2e` に追加してください。

【テスト内容】

- ユーザー操作のシミュレーションによる、アプリ全体の動作確認

【テスト実行方法】

以下のコマンドで E2E テストを開始できます。

```bash
sudo docker-compose exec nuxt pnpm e2e
# または、コンテナ内で pnpm e2e
```

【テストコードの自動生成】

ブラウザ操作から Playwright がテストコードを自動生成するには、次のコマンドを使用します。

```bash
cd app
pnpm exec playwright codegen <テスト対象ページのURL>
# 例: pnpm exec playwright codegen http://localhost:30000/example
```

【テスト結果の確認】

生成されたE2Eのテスト結果レポートは以下のコマンドで表示できます。

```bash
cd app
pnpm exec playwright show-report tests/e2e/test-results
```

### Storybookについて

#### Storybook の使用方法とストーリーの追加方法

Storybook を使用して、コンポーネントの動作を確認し、ドキュメントを作成します。
`stories` ディレクトリにコンポーネントのストーリーを追加してください。

```bash
app/
└─ stories/
  ├─ components/
  │   ├─ Header.stories.ts
  │   └─ ...
  └─ pages/
      ├─ Example.stories.ts
      └─ ...
```

#### Storybook の確認方法

コンテナ立ち上げ後 `http://localhost:6006` で Storybook のページが表示されます。
