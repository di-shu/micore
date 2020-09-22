const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  poweredByHeader: false,
  devIndicators: { autoPrerender: false }
}

module.exports = withPlugins([withSass, withFonts], nextConfig)
