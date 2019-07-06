import { Component, Fragment } from 'react'
import Helmet from 'react-helmet'

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

import NextI18NextInstance from '../i18n'

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

        const { i18n } = NextI18NextInstance
        const { data } = this.props

        const { avatar_url, name, bio } = data

        return (
            <Fragment>

                <Helmet
                    title='index page, nextjs-stater'
                    meta={[
                        { 
                            property: 'og:title',
                            content: 'index page, nextjs-stater'
                        }
                    ]}
                />

                <Layout childrenStyles={ styles.index }>

                    <img src={ png } alt='' />
                    <img src={ svg } alt='' />

                    <p>nextjs-stater</p>

                    <Profile 
                        avatar={ avatar_url } 
                        name={ name } 
                        bio={ bio }
                    />


                    <button onClick={ _ => i18n.changeLanguage('en')}> EN </button>
                    <button onClick={ _ => i18n.changeLanguage('ko')}> KO </button>

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