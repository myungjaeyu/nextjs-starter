import { app, server } from './server'
import awsServerlessExpress from'aws-serverless-express'

const binaryMimeTypes = ['*/*']

export const hello = (event, context) => {

    app.prepare().then(() => {

        awsServerlessExpress.proxy(
            awsServerlessExpress.createServer(server, null, binaryMimeTypes), event, context
        )

    })

}