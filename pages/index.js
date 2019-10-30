import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import style from '../static/styles/index.scss'

import img from '../static/images/img.png'

import Layout from '../components/Layout'

class Index extends Component {

    static async getInitialProps (pageProps) {

        return {
            mock : 'abc'
        }

    }

    render() {

        const { mock, t } = this.props

        const SEO = { 
            title: `nextjs-starter`, 
            description: mock
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout childrenClassName={ style.index }>

                    <img src={ img } alt='' />

                    <p>nextjs-starter { mock }</p>

                    <p>안녕</p>

                </Layout>

            </Fragment>
        )

    }

}

export default Index