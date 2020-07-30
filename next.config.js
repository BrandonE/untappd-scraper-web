const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const debug = process.env.NODE_ENV !== 'production'

const config = withCSS(withImages({
  inlineImageLimit: 65536,
  webpack (config, options) {
    config.output.publicPath = !debug
      ? `/untappd-scraper-web${config.output.publicPath}` : config.output.publicPath
    return config
  }
}))

config.assetPrefix = !debug ? '/untappd-scraper-web/' : ''

module.exports = config
