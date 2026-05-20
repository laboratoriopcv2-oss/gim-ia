/** @type {import('next').NextConfig} */

const repoName = 'NOMBRE_REPO';

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;