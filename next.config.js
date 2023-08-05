/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // TODO: add domains (?)
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
