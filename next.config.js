const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  distDir: './dist',
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withPlugins([withSass, withFonts], nextConfig)
