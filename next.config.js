const withPlugins = require('next-compose-plugins')

const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')

module.exports = withPlugins([
    [ withCss, { }],
    [ withSass, { cssModules: true }],
    [ withOptimizedImages, { }],
    [ withPWA, { }]
], {

})