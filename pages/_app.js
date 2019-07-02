import App, { Container } from 'next/app'
import Helmet from 'react-helmet'

export default class extends App {

    static async getInitialProps ({ Component, context }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(context)

        return { pageProps }

    }

    render () {

        const { Component, pageProps } = this.props

        return (
            <Container>

                <Helmet
                    htmlAttributes={
                        { 
                            lang: 'en'
                        }
                    }
                    title='nextjs-stater'
                    meta={[
                        {
                            name: 'viewport',
                            content: 'width=device-width, initial-scale=1'
                        },
                        { 
                            property: 'og:title', content: 'nextjs-stater'
                        }
                    ]}
                />

                <Component { ...pageProps } />
            </Container>
        )
    }

}