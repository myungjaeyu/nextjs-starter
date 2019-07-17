const { join } = require('path'),
      { parse } = require('url')

const express = require('express'),
      next = require('next')

const port = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production',
      sls = process.env.NODE_SLS

const app = next({ dev }),
      server = express(),
      handle = app.getRequestHandler(),
      handleServeStatic = (req, res) => app.serveStatic(req, res, join('.next', parse(req.url, true).pathname))


server
    .get('/sw.js', handleServeStatic)
    .get('/precache-manifest.*.js', handleServeStatic)
    .get('/ap/:username', (req, res) => app.render(req, res, '/axios/profile', { username: req.params.username }))
    .get('/rp', (req, res) => app.render(req, res, '/redux/profile'))
    .get('*', handle)


if (!sls) app.prepare().then(() => server.listen(port, err => console.log(`> Ready on http://localhost:${ port }`)))
else {

    exports.app = app
    exports.server = server

}