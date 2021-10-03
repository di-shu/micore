const withSass = require('@zeit/next-sass')
const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins')

// const nextConfig = {
//   poweredByHeader: false,
//   exportTrailingSlash: true,
//   devIndicators: { autoPrerender: false }
// }

module.exports = withPlugins([withSass, nextTranslate])
