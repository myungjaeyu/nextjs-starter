import App, { Container } from 'next/app'

import '../static/styles/normalize.scss'
import '../static/styles/base.scss'

import NextSeo from 'next-seo'
import SEO from '../next-seo.config'

import Router from 'next/router'
import withGA from 'next-ga'

import * as Sentry from '@sentry/browser'

Sentry.init({ dsn: 'ENTER_YOUR_SENTRY_DSN_HERE' })

class MyApp extends App {

    static async getInitialProps ({ Component, ctx }) {

        let pageProps = {}

        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

        return { pageProps }

    }

    render () {

        const { Component, pageProps } = this.props

        return (
            <Container>

                <NextSeo config={ SEO } />

                <Component { ...pageProps } />

            </Container>
        )
    }

}

export default withGA('UA-xxxxxxxxx-1', Router)(MyApp)