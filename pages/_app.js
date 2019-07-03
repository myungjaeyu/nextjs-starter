import App, { Container } from 'next/app'
import Helmet from 'react-helmet'

import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../store'

class MyApp extends App {

    static async getInitialProps ({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

        return { pageProps }

    }

    render () {

        const { Component, pageProps, store } = this.props

        return (
            <Container>

                <Provider store={ store }>

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

                </Provider>

            </Container>
        )
    }

}

export default withRedux(store)(MyApp)