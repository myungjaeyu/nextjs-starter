import { Fragment } from 'react'

import Header from '../Header'
import Footer from '../Footer'

export default ({ childrenClassName, children }) => (
    <Fragment>

        <Header />

        <main className={ childrenClassName }>

            { children }

        </main>

        <Footer />

    </Fragment>
)