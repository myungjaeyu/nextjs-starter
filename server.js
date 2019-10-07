const { join } = require('path'),
      { parse } = require('url')

const express = require('express'),
      next = require('next')

const Router = require('./routes')

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production',
      sls = process.env.NODE_SLS

const app = next({ dev }),
      server = express(),
      handle = Router.getRequestHandler(app),
      handleServeStatic = (req, res) => app.serveStatic(req, res, join('.next', parse(req.url, true).pathname))

const nextI18NextMiddleware = require('next-i18next/middleware').default,
    NextI18Next = require('next-i18next').default,
    nextI18NextInstance = new NextI18Next({
        defaultLanguage: 'en',
        otherLanguages: ['ko', 'mn']
    })

server
    .use(nextI18NextMiddleware(nextI18NextInstance))
    .get('/sw.js', handleServeStatic)
    .get('/precache-manifest.*.js', handleServeStatic)
    .get('*', handle)


if (!sls) app.prepare().then(() => server.listen(port, err => console.log(`> Ready on http://localhost:${ port }`)))
else {

    exports.app = app
    exports.server = server

}