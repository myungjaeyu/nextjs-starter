import { createAction, handleActions } from 'redux-actions'
import * as types from '../constants'
import immutable from 'immutability-helper'
import Cookies from 'js-cookie'

export const authCookie = createAction(types.AUTH_COOKIE)
export const authLogin = createAction(types.AUTH_LOGIN)
export const authLoginSuccess = createAction(types.AUTH_LOGIN_SUCCESS)
export const authLoginFailure = createAction(types.AUTH_LOGIN_FAILURE)
export const authLogout = createAction(types.AUTH_LOGOUT)

const defaultState = {
    pending: false,
    token: '',
    user: {},
    errors: []
}

export default handleActions({
    [types.AUTH_COOKIE] : (state, { payload: { token, user } }) => {

        return immutable(state, {
            token: {
                $set: token
            },
            user: {
                $set: user
            }
        })

    },
    [types.AUTH_LOGIN] : (state) => {

        return immutable(state, {
            pending: {
                $set: true
            }
        })

    },
    [types.AUTH_LOGIN_SUCCESS] : (state, { type, payload: { token, user } }) => {

        Cookies.set('token', token)

        Cookies.set('user', user)

        return immutable(state, {
            pending: {
                $set: false
            },
            token: {
                $set: token
            },
            user: {
                $set: user
            },
            errors: {
                $set: []
            }
        })

    },
    [types.AUTH_LOGIN_FAILURE] : (state, { payload: { errors } }) => {

        return immutable(state, {
            pending: {
                $set: false
            },
            errors: {
                $set: errors
            }
        })

    },
    [types.AUTH_LOGOUT] : () => {

        Cookies.remove('token')

        Cookies.remove('user')

        return defaultState

    }  
}, defaultState)