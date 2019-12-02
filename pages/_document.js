import Document, { Head, Main, NextScript } from 'next/document'

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel='stylesheet' href='//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' />
                    <link rel='stylesheet' href='//unpkg.com/shards-ui@latest/dist/css/shards.min.css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}