import { createAction, handleActions } from 'redux-actions'
import * as types from '../constants'
import immutable from 'immutability-helper'

export const fetchGithub = createAction(types.FETCH_GITHUB)
export const fetchGithubSuccess = createAction(types.FETCH_GITHUB_SUCCESS) // response
export const fetchGithubFailure = createAction(types.FETCH_GITHUB_FAILURE) // error

const defaultState = {
    username: 'myungjaeyu',
    data: {}
}

export default handleActions({
    [types.FETCH_GITHUB] : (state) => {

        return state

    },
    [types.FETCH_GITHUB_SUCCESS] : (state, { type, payload: { data } }) => {

        console.log(type)

        return immutable(state, {
            data: {
                $set: data
            }
        })

    },
    [types.FETCH_GITHUB_FAILURE] : (state, { payload: { error } }) => {

        error && console.error(error)

        return state

    }
}, defaultState)