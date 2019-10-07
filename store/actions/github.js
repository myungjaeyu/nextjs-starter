import * as types from '../constants'

export const fetchGithub = () => ({
    type: types.FETCH_GITHUB
})

export const fetchGithubSuccess = (response) => ({
    type: types.FETCH_GITHUB_SUCCESS,
    response
})

export const fetchGithubFailure = (error) => ({
    type: types.FETCH_GITHUB_FAILURE,
    error
}) 