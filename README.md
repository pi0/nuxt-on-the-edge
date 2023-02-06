# Nuxt on The Edge

Inspired from [sveltekit-on-the-edge](https://github.com/Rich-Harris/sveltekit-on-the-edge) and [react-on-the-edge](https://github.com/vercel-labs/react-on-the-edge). It uses [Nuxt 3](https://v3.nuxtjs.org/) and [Nitro](https://nitro.unjs.io/) to deploy **Vue** based SSR on the edge.

**Online Demo:** https://nuxt-on-the-edge.vercel.app

## Setup

Enable corepack:

```bash
npx corepack enable
```

Make sure to install the dependencies:

```bash
pnpm install
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

The easiest way to deploy your app is to link the repo to your Vercel account. Alternatively, you can create a production build locally using `pnpm build`.

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
