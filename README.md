# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## Server API

尝试利用 vercel serverless function 功能提供 server API，
有 pingcap 提供的例子：[tidb-prisma-vercel-demo](https://github.com/pingcap/tidb-prisma-vercel-demo/tree/main/pages/api)
但此处 nocodb 使用不是 nuxtjs，需要使用 [server directory](https://v3.nuxtjs.org/guide/directory-structure/server#server-directory) 实现。

前端代码里现在使用的是 [nocodb-sdk](https://github.com/nocodb/nocodb/tree/develop/packages/nocodb-sdk)，考虑直接替换成 tidb-prisma-vercel-demo 中
实现的直接操作数据库，或者把 [nocodb 本体代码](https://github.com/nocodb/nocodb/tree/develop/packages/nocodb)重新包装成一个单独的 express app。
