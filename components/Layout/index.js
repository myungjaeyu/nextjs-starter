import { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

export default ({ ClassName, children }) => (
    <Fragment>

        <Header />

        <main className={ ClassName }>

            { children }

        </main>

        <Footer />

    </Fragment>
)