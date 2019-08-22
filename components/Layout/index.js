import { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

export default ({ childrenClassName, children }) => (
    <Fragment>

        <Header />

        <main className={ childrenClassName }>

            { children }

        </main>

        <Footer />

    </Fragment>
)