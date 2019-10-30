import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import Link from 'next/link'

import { connect } from 'react-redux'

import style from '../static/styles/index.scss'

import img from '../static/images/img.png'

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

                <Layout childrenClassName={ style.index }>

                    <img src={ img } alt='' />

                    <p>nextjs-starter { mock }</p>

                    <p>안녕 { mock }</p>

                        <Link href='/profile/[username]' as={`/profile/${ mock }`}>

                            <p>Profile</p>

                        </Link>

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