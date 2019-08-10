import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import style from '../static/styles/index.scss'

import img from '../static/images/img.png'

import Layout from '../components/Layout'

import NextI18NextInstance from '../i18n'

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

        const { i18n } = NextI18NextInstance

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout childrenClassName={ style.index }>

                    <img src={ img } alt='' />

                    <p>nextjs-starter { mock }</p>

                    {/* <button onClick={ () => { throw new Error('test') }}>sentry</button> */}


                    <p>{ t('message') }</p>

                    <button onClick={ _ => i18n.changeLanguage('en')}> EN </button>
                    <button onClick={ _ => i18n.changeLanguage('ko')}> KO </button>
                    <button onClick={ _ => i18n.changeLanguage('mn')}> MN </button>

                </Layout>

            </Fragment>
        )

    }

}

export default NextI18NextInstance.withTranslation('common')(Index)