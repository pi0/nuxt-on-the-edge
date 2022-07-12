import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    entry: require.resolve('./vercel-edge'),
    minify: false,
    rollupConfig: {
      output: {
        format: "module"
      }
    }
  }
})
