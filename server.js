const express = require('express'),
      session = require('express-session'),
      next = require('next')

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
      handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express()

    server
        .use(session({ secret : '1', resave: false, saveUninitialized: true }))
        .get('*', (req, res) => handle(req, res))
        .listen(port, err => {

            if (err) throw err

            console.log(`> Ready on http://localhost:${ port }`)

        })

})