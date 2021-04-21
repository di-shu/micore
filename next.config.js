const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const { i18n } = require('./next-i18next.config')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  i18n,
  poweredByHeader: false,
  // exportTrailingSlash: true,
  devIndicators: { autoPrerender: false },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}

module.exports = withPlugins([withSass, withFonts], nextConfig)
