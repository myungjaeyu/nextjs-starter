import { Fragment } from 'react'
import Helmet from 'react-helmet'

import styles from '../static/styles/index.scss'

import png from '../static/images/png.png'
import svg from '../static/images/svg.svg'

import Layout from '../components/layout'

const Index = () => (
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

        </Layout>

    </Fragment>
)

export default Index