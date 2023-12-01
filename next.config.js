/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'KimCookieYa.github.io';

const nextConfig = {
  output: 'export',
  basePath: '/',
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
