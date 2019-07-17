const { app, server } = require('./server')
const awsServerlessExpress = require('aws-serverless-express')

const binaryMimeTypes = ['*/*']

exports.hello = (event, context) => {

    app.prepare().then(() => {

        awsServerlessExpress.proxy(
            awsServerlessExpress.createServer(server, null, binaryMimeTypes), 
            event,
            context
        )

    })

}