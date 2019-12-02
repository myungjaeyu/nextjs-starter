const withPlugins = require('next-compose-plugins')

const withSass = require('@zeit/next-sass')
const withPWA = require('next-pwa')

module.exports = withPlugins([
    [ withSass, { cssModules: true }],
    [ withPWA, { }]
], {

})