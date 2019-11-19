import { Component, Fragment } from 'react'
import NextSeo from 'next-seo'
import useForm from 'react-hook-form'

import Router from 'next/router'

import { connect } from 'react-redux'

import style from '../static/styles/login.scss'

import { authLogin } from '../store/modules/auth'

import { Button } from 'shards-react'

const LoginForm = ({ onSubmit, children }) => {

    const { register, handleSubmit, errors } = useForm()

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className='text-center'>

            { children }

            <input autoFocus name='username' placeholder='Username' className='form-control mb-1' ref={ register({ required: true }) } />

            <input name='password' type='password' placeholder='Password' className='form-control mb-1' ref={ register({ required: true }) } />

            <Button block theme='light'>Login</Button>

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

        const { pending, errors } = this.props

        const SEO = { 
            title: `Login`
        }

        return (
            <Fragment>

                <NextSeo config={ SEO } />

                <main className={ style.login }>

                    <article className={ `${ style.wrapper } d-flex justify-content-center`}>

                        <LoginForm onSubmit={ this.handleAuth } >

                            <h1>Nextjs Starter</h1>

                        </LoginForm>

                    </article>

                    { pending && <p className='text-center'>Please wait...</p> }

                    { errors && errors.map((e, i) => <p key={ i } className='text-center'> { e } </p>)}

                </main>

            </Fragment>
        )

    }

}

const mapState = ({ auth: { pending, errors }}) => {

    return ({
        pending,
        errors
    })

}

const mapDispatch = {
    authLogin
}

export default connect(
    mapState,
    mapDispatch
)(Login)