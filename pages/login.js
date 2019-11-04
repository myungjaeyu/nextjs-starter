import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import useForm from 'react-hook-form'

import Router from 'next/router'

import { connect } from 'react-redux'

import style from '../static/styles/login.scss'

import { authLogin } from '../store/modules/auth'

const LoginForm = ({ onSubmit, pending }) => {

    const { register, handleSubmit, errors } = useForm()

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>

            <input name='username' placeholder='Username' ref={ register({ required: true }) } />

            <input name='password' type='password' placeholder='Password' ref={ register({ required: true }) } />

            <input type='submit' value='Login' />

            { pending && <p>Please wait...</p> }

            { errors.username && <p>Please enter an username.</p> }

            { errors.password && <p>Please enter an password.</p> }

        </form>
    )

}

class Login extends Component {

    static async getInitialProps ({ store, isServer, res }) {

        const { auth: { token } } = store.getState()

        if (token) {

            if (isServer) {

                res.redirect('/')

            } else {

                Router.push('/')

            }
            
        }

        return {

        }

    }

    componentDidUpdate() {

        const { token } = this.props

        if (token) Router.push('/')

    }

    handleAuth = (values) => this.props.authLogin(values)

    render() {

        const { pending } = this.props

        const SEO = { 
            title: `Login`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <main className={ style.login }>

                    <h1>Login</h1>

                    <LoginForm onSubmit={ this.handleAuth } pending={ pending } />

                </main>

            </Fragment>
        )

    }

}

const mapState = ({ auth: { pending }}) => {

    return ({
        pending
    })

}

const mapDispatch = {
    authLogin
}

export default connect(
    mapState,
    mapDispatch
)(Login)