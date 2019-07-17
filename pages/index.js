import { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { StateObservable } from 'redux-observable'
import { of, Subject } from 'rxjs'

import epics from '../store/epcis'
import { fetchGithub } from '../store/actions'

import styles from '../static/styles/index.scss'

import png from '../static/images/png.png'
import svg from '../static/images/svg.svg'

import Layout from '../components/layout'
import Profile from '../components/Profile'

class Index extends Component {

    static async getInitialProps (pageProps) {

        const { store } = pageProps

        const store$ = new StateObservable(new Subject(), store.getState())

        const action = await epics(
                                of(fetchGithub()),
                                store$
                            )
                            .toPromise()

        store.dispatch(action)

        return {
            mock : 'abc'
        }

    }

    render() {

        const { data } = this.props

        const { avatar_url, name, bio } = data

        return (
            <Fragment>

                <Layout childrenStyles={ styles.index }>

                    <img src={ png } alt='' />
                    <img src={ svg } alt='' />

                    <p>nextjs-stater</p>

                    <Profile 
                        avatar={ avatar_url } 
                        name={ name } 
                        bio={ bio }
                    />

                </Layout>

            </Fragment>
        )

    }

}

const mapState = ({ app : { data } }) => ({
    data
})

const mapDispatch = {
    fetchGithub
}

export default connect(
    mapState,
    mapDispatch
)(Index)