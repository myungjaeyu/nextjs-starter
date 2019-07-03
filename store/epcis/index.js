import { combineEpics } from 'redux-observable'

import { fetchGithub$ } from './app/fetchGithub'

export default combineEpics(
    fetchGithub$
)