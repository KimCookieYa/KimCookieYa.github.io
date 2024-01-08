/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'KimCookieYa.github.io';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/a275ea5e692047f7ad73b5242fbd9086',
      },
      {
        source: '/portfolio',
        destination: '/b30f8a5319d64d1e933130d680703abd',
      },
    ];
  },
};

module.exports = nextConfig;
