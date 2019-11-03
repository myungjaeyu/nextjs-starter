import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'

import { connect } from 'react-redux'
import { of } from 'rxjs'

import epics from '../../store/epics'
import { fetchGithub } from '../../store/modules/github'

import Layout from '../../components/Layout'

class Profile extends Component {

    static async getInitialProps (pageProps) {

        const { isServer, query: { username } } = pageProps

        if (isServer) {

            const { store } = pageProps

            const action = await epics(
                                    of(fetchGithub(username))
                                )
                                .toPromise()

            store.dispatch(action)

        }

        return { 
            isServer,
            username
        }

    }

    constructor(props) {

        super(props)

        const { isServer, data } = props

        const isEmpty = obj => Object.keys(obj).length === 0

        if (!isServer && isEmpty(data)) {

            const { fetchGithub, username } = props

            fetchGithub(username)

        }

    }

    render() {

        const { pending, data } = this.props

        const { avatar_url, name, bio } = data

        const SEO = { 
            title: `Profile - ${ name }`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout >

                    { pending ? <h1> Loading... </h1> : <div>

                        <img src={ avatar_url } alt=''/>

                        <p>{ name }</p>

                        <p>{ bio }</p>

                    </div> }

                </Layout>

            </Fragment>
        )

    }

}

const mapState = ({ github: { pending, data } }) => ({
    pending,
    data
})

const mapDispatch = {
    fetchGithub
}

export default connect(
    mapState,
    mapDispatch
)(Profile)