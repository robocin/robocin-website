import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  i18n: {
    // TODO: add domains (?)
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withMDX = createMDX({
  //TODO ADD MDX PLUGINS
});

// Change module.exports to export default
export default withMDX(nextConfig);
