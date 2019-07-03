import App, { Container } from 'next/app'
import Helmet from 'react-helmet'

import { compose } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../store'

import { appWithTranslation } from '../i18n'
import { initGA } from '../analytics'

class MyApp extends App {

    static async getInitialProps ({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

        return { pageProps }

    }

    componentDidMount () {

        initGA()

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

export default compose(
    withRedux(store),
    appWithTranslation
)(MyApp)