const withPlugins = require('next-compose-plugins')

const sass = require('@zeit/next-sass')
const opt_images = require('next-optimized-images')
const pwa = require('next-pwa')

module.exports = withPlugins([
    [sass, {
        cssModules: true,
        postcssLoaderOptions: {
            autoprefixer: true
        }
    }],
    [opt_images, { }],
    [pwa, { }]
])