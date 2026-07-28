/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，适配 GitHub Pages
  output: 'export',
  // 部署在 https://ii3lack.github.io/ii3lack/ 子路径下
  basePath: '/ii3lack',
  assetPrefix: '/ii3lack/',
  // 静态导出不支持 next/image 优化
  images: {
    unoptimized: true,
  },
  // 确保 trailing slash，GitHub Pages 友好
  trailingSlash: true,
}

module.exports = nextConfig
