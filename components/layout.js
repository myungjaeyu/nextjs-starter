import { Fragment } from 'react'

export default ({ childrenStyles, children }) => (
    <Fragment>

        <main className={ childrenStyles }>

            { children }

        </main>

    </Fragment>
)