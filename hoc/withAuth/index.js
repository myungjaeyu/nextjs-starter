import { Component } from 'react'

import { connect } from 'react-redux'

import { authCookie } from '../../store/modules/auth'

import nookies from 'nookies'

export default (AuthComponent) => {

    class Auth extends Component {

        static async getInitialProps (ctx) {

            const pageCtx = ctx.ctx
            const { isServer } = pageCtx
            let componentProps = {}

            if (isServer) {

                const { token, user } = nookies.get(pageCtx)

                if (token) pageCtx.store.dispatch(authCookie({ token, user: JSON.parse(user) }))

            }

            if (AuthComponent.getInitialProps) componentProps = await AuthComponent.getInitialProps(ctx)

            
            return {
                ...componentProps
            }

        }

        render() {

            return (
                <AuthComponent { ...this.props } />
            )

        }

    }

    const mapState = ({ auth: { token, user } }) => {

        return ({
            token,
            user
        })

    }

    const mapDispatch = {
        authCookie
    }

    return connect(
        mapState,
        mapDispatch
    )(Auth)

}