import { join } from 'path'
import { parse } from 'url'

import express from 'express'
import session from 'express-session'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18NextInstance from './i18n'

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
      handler = app.getRequestHandler()

const handleServer = () => {

    const server = express(),
          handleServeStatic = (req, res) => app.serveStatic(req, res, join('.next', parse(req.url, true).pathname))

    server
        .use(session({ secret : '1', resave: false, saveUninitialized: true }))
        .use(nextI18NextMiddleware(nextI18NextInstance))
        .get('/sw.js', handleServeStatic)
        .get('/precache-manifest.*.js', handleServeStatic)
        .get('*', handler)

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