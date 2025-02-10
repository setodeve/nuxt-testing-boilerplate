FROM node:20-alpine

# pnpm をインストール
RUN npm install -g pnpm

WORKDIR /app

# 依存関係をインストールするために package.json と pnpm-lock.yaml をコピー
COPY ../app/pnpm-lock.yaml ./
COPY ../app/package.json ./

# 依存関係をインストール
RUN pnpm install

# アプリケーションのソースコードをコピー
COPY ../app .

CMD ["pnpm", "run", "dev"]
