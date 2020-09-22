const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
  distDir: 'build',
  target: 'serverless',
  poweredByHeader: false,
  devIndicators: { autoPrerender: false },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/services': { page: '/services' },
      '/portfolio': { page: '/portfolio' },
    }
  }
}

module.exports = withPlugins([withSass, withFonts, withImages, withTM], nextConfig)
