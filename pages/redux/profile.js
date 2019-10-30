import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'

import { connect } from 'react-redux'
import { StateObservable } from 'redux-observable'
import { of, Subject } from 'rxjs'

import epics from '../../store/epics'
import { fetchGithub } from '../../store/modules/github'

import Layout from '../../components/Layout'

class ReduxProfile extends Component {

    static async getInitialProps (pageProps) {

        const { store } = pageProps

        const store$ = new StateObservable(new Subject(), store.getState())

        const action = await epics(
                                of(fetchGithub()),
                                store$
                            )
                            .toPromise()

        store.dispatch(action)

        return { }

    }

    render() {

        const { username, data } = this.props.github

        const { avatar_url, name, bio } = data

        const SEO = { 
            title: `Redux Profile - ${ username }`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <Layout >

                    <img src={ avatar_url } alt=''/>

                    <p>{ name }</p>

                    <p>{ bio }</p>

                </Layout>

            </Fragment>
        )

    }

}

const mapState = ({ github }) => ({
    github
})

const mapDispatch = {
    fetchGithub
}

export default connect(
    mapState,
    mapDispatch
)(ReduxProfile)