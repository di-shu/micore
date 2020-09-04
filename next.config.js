const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withPlugins([withSass(), withFonts, withImages, withTM], nextConfig)
