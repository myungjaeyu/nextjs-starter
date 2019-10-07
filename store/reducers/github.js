import immutable from 'immutability-helper'
import { createReducer } from 'redux-create-reducer'

import * as types from '../constants'

const githubState = {
    username: 'myungjaeyu',
    data: {}
}

export default createReducer(githubState, {
    [types.FETCH_GITHUB_SUCCESS](state, { type, response}) {

        console.log({ type })

        return immutable(state, {
            data: {
                $set: response
            }
        })

    },
    [types.FETCH_GITHUB_FAILURE](state, { error }) {

        error && console.error(error)

        return state

    }
}) 