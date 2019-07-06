import { join } from 'path'
import { parse } from 'url'

import express from 'express'
import session from 'express-session'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import NextI18Next from 'next-i18next'

import routes from './routes'

const nextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['ko'],
    localeSubpaths : 'foreign'
})

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
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



const server = handleServer()

if (dev) {

    app.prepare().then(() => {

        server.listen(port, err => {
            if (err) throw err

            console.log(`> Ready on http://localhost:${ port }`)
        })

    })

}

export {
    app,
    server
}