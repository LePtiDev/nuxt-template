// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    database: {
      host: process.env.NUXT_DATABASE_HOST,
      port: process.env.NUXT_DATABASE_PORT,
      name: process.env.NUXT_DATABASE_NAME,
      user: process.env.NUXT_DATABASE_USER,
      password: process.env.NUXT_DATABASE_PASSWORD,
      url: process.env.NUXT_DATABASE_URL,
    },
    s3: {
      endpoint: process.env.NUXT_S3_ENDPOINT,
      port: process.env.NUXT_S3_PORT,
      accessKey: process.env.NUXT_S3_ACCESS_KEY,
      secretKey: process.env.NUXT_S3_SECRET_KEY,
      bucket: process.env.NUXT_S3_BUCKET,
      region: process.env.NUXT_S3_REGION,
      forcePathStyle: process.env.NUXT_S3_FORCE_PATH_STYLE,
      url: process.env.NUXT_S3_URL,
    },
    public: {
      minioConsoleUrl: process.env.NUXT_MINIO_CONSOLE_URL,
    },
  },
  i18n: {
    defaultLocale: 'fr',
    restructureDir: 'app/i18n',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
    ],
  },
  experimental: {
    componentIslands: true,
  },
});
