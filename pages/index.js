import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import Link from 'next/link'

import { connect } from 'react-redux'

import style from '../static/styles/index.scss'

import Layout from '../components/Layout'

class Index extends Component {

    static async getInitialProps (pageProps) {

        return {
            mock : 'myungjaeyu'
        }

    }

    render() {

        const { mock } = this.props

        const SEO = { 
            title: `nextjs-starter`, 
            description: mock
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout ClassName={ style.index }>

                    <p>안녕 { mock }</p>

                    <p>

                        <Link href='/profile/[username]' as={`/profile/${ mock }`}>

                            <a>
                                Profile
                            </a>

                        </Link>

                    </p>

                </Layout>

            </Fragment>
        )

    }

}

const mapState = (state) => {

    console.log(state)

    return ({

    })
}

const mapDispatch = {

}

export default connect(
    mapState,
    mapDispatch
)(Index)