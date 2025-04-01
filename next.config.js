/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/assets/',
          outputPath: 'assets/',
        },
      },
    });
    return config;
  },
  images: {
    domains: ['localhost'],
  },
  assetPrefix: '/assets/',
};

module.exports = nextConfig; 