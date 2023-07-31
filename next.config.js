/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // TODO: add domains (?)
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
