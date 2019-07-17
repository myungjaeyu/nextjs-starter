import { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

export default ({ childrenStyles, children }) => (
    <Fragment>

        <Header />

        <main className={ childrenStyles }>

            { children }

        </main>

        <Footer />

    </Fragment>
)