const { join } = require('path'),
      { parse } = require('url')

const express = require('express'),
      next = require('next')

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
      server = express(),
      handle = app.getRequestHandler(),
      handleServeStatic = (req, res) => app.serveStatic(req, res, join('.next', parse(req.url, true).pathname))

server
    .get('/sw.js', handleServeStatic)
    .get('/precache-manifest.*.js', handleServeStatic)
    .get('*', handle)

app.prepare().then(() => server.listen(port, err => console.log(`> Ready on http://localhost:${ port }`)))