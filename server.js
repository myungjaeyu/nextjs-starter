const { join } = require('path'),
      { parse } = require('url')

const express = require('express'),
      session = require('express-session'),
      next = require('next'),
      nextI18NextMiddleware = require('next-i18next/middleware'),
      NextI18Next = require('next-i18next')

const nextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['ko'],
    localeSubpaths : 'foreign'
})

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
      routes = require('./routes'),
      handler = routes.getRequestHandler(app)

const handleServer = () => {

    const server = express(),
          handleServeStatic = (req, res) => app.serveStatic(req, res, join(__dirname, '.next', parse(req.url, true).pathname))

    server
        .use(session({ secret : '1', resave: false, saveUninitialized: true }))
        .use(nextI18NextMiddleware(nextI18NextInstance))
        .get('/sw.js', (req, res) => handleServeStatic(req, res))
        .get('/precache-manifest.*.js', (req, res) => handleServeStatic(req, res))
        .use(handler)

    return server

}



if (dev) {

    app.prepare().then(() => {

        const server = handleServer()

        server.listen(port, err => {
            if (err) throw err

            console.log(`> Ready on http://localhost:${ port }`)
        })

    })

} else {

    const server = handleServer()

    exports.app = app
    exports.server = server

}
