import { Fragment } from 'react'
import App from 'next/app'

import { compose } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../store'

import '../static/styles/normalize.scss'
import '../static/styles/base.scss'

import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

import withAuth from '../hoc/withAuth'

class MyApp extends App {

    static async getInitialProps ({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

        return { pageProps }

    }

    render () {

        const { Component, pageProps, store, token, user } = this.props

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Provider store={ store }>

                    <Component { ...pageProps } token={ token } user={ user } />

                </Provider>

            </Fragment>
        )
    }

}

export default compose(
    withRedux(store),
    withAuth
)(MyApp)