/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // TODO: add domains (?)
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// Change module.exports to export default
module.exports = nextConfig
