import { createAction, handleActions } from 'redux-actions'
import * as types from '../constants'
import immutable from 'immutability-helper'

export const fetchGithub = createAction(types.FETCH_GITHUB)
export const fetchGithubSuccess = createAction(types.FETCH_GITHUB_SUCCESS) // response
export const fetchGithubFailure = createAction(types.FETCH_GITHUB_FAILURE) // error

const defaultState = {
    pending: false,
    data: {}
}

export default handleActions({
    [types.FETCH_GITHUB] : (state) => {

        return immutable(state, {
            pending: {
                $set: true
            }
        })

    },
    [types.FETCH_GITHUB_SUCCESS] : (state, { type, payload: { data } }) => {

        return immutable(state, {
            pending: {
                $set: false
            },
            data: {
                $set: data
            }
        })

    },
    [types.FETCH_GITHUB_FAILURE] : (state, { payload: { error } }) => {

        // console.log(error)

        return immutable(state, {
            pending: {
                $set: false
            }
        })

    }
}, defaultState)