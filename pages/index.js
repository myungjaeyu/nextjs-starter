import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import Link from 'next/link'

import { connect } from 'react-redux'

import style from '../static/styles/index.scss'

import Layout from '../components/Layout'

import { authLogout } from '../store/modules/auth'

class Index extends Component {

    static async getInitialProps (pageProps) {

        return {

        }

    }

    handleLogout = () => this.props.authLogout()

    render() {

        const { token, user: { username } } = this.props

        const SEO = { 
            title: `nextjs-starter`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout ClassName={ style.index }>

                    <p>안녕 { username }</p>

                    <p>

                        <Link href='/profile/[username]' as={`/profile/${ username }`}>

                            <a>
                                Profile
                            </a>

                        </Link>

                    </p>

                    <p>

                        <Link href='/login' >

                            <a>
                                Login
                            </a>

                        </Link>

                    </p>

                    { token && 
                        <p>
                            <button onClick={ this.handleLogout }>Logout</button>
                        </p> 
                    }

                </Layout>

            </Fragment>
        )

    }

}

const mapState = (state) => {

    return ({

    })
}

const mapDispatch = {
    authLogout
}

export default connect(
    mapState,
    mapDispatch
)(Index)