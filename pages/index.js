import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'

import style from '../static/styles/index.scss'

import Layout from '../components/Layout'

class Index extends Component {

    static async getInitialProps (pageProps) {

        return {

        }

    }

    render() {

        const { token, user: { username } } = this.props

        const SEO = { 
            title: `nextjs-starter`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout ClassName={ style.index }>

                    { token && <p>Hello, { username }</p> }

                </Layout>

            </Fragment>
        )

    }

}

export default Index