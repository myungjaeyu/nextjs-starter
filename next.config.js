const withPlugins = require('next-compose-plugins')

const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')

module.exports = withPlugins([
    [ withSass, { cssModules: true }],
    [ withOptimizedImages, { }],
    [ withPWA, { }]
], {

})