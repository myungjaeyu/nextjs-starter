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

import Router from 'next/router'
import withGA from 'next-ga'

import NextI18NextInstance from '../i18n'

// import * as Sentry from '@sentry/browser'

// Sentry.init({ dsn: 'ENTER_YOUR_SENTRY_DSN_HERE' })

class MyApp extends App {

    static async getInitialProps ({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

        Object.assign(pageProps, { namespacesRequired: ['common'] })

        return { pageProps }

    }

    render () {

        const { Component, pageProps, store } = this.props

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Provider store={ store }>

                    <Component { ...pageProps } />

                </Provider>

            </Fragment>
        )
    }

}

export default compose(
    withRedux(store),
    withGA('UA-xxxxxxxxx-1', Router)
)(NextI18NextInstance.appWithTranslation(MyApp)) 