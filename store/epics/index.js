import { combineEpics } from 'redux-observable'

import { fetchGithub$ } from './github/fetchGithub'

export default combineEpics(
    fetchGithub$
) 