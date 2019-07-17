import App, { Container } from 'next/app'

import { compose } from 'redux'
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

                    <Component { ...pageProps } />

                </Provider>

            </Container>
        )
    }

}

export default compose(
    withRedux(store)
)(MyApp)