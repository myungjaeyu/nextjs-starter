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
      handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express()

    server
        .use(session({ secret : '1', resave: false, saveUninitialized: true }))
        .use(nextI18NextMiddleware(nextI18NextInstance))
        .get('*', (req, res) => handle(req, res))
        .listen(port, err => {

            if (err) throw err

            console.log(`> Ready on http://localhost:${ port }`)

        })

})