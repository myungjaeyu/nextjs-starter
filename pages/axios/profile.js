import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'

import Layout from '../../components/Layout'

import axios from 'axios'

class AxiosProfile extends Component {

    static async getInitialProps (pageProps) {

        const { username } = pageProps.query

        const { data : { avatar_url, name, bio }} = await axios.get(`https://api.github.com/users/${ username }`)

        return {
            username,
            avatar_url,
            name,
            bio
        }

    }

    render() {

        const { username, avatar_url, name, bio } = this.props

        const SEO = { 
            title: `Axios Profile - ${ username }`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout>

                    <img src={ avatar_url } alt=''/>

                    <p>{ name }</p>

                    <p>{ bio }</p>

                </Layout>

            </Fragment>
        )

    }

}

export default AxiosProfile