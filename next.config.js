const path = require('path')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withPlugins([[
  [optimizedImages, {
    optimizeImagesInDev: true,
    imagesFolder: path.join(__dirname, "public/images")
  }]
], withSass(), withFonts, withImages, withTM], nextConfig)
