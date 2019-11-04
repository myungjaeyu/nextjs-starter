import { combineEpics } from 'redux-observable'

import { fetchGithub$ } from './github/fetchGithub'
import { authLogin$ } from './auth/authLogin'

export default combineEpics(
    fetchGithub$,
    authLogin$
) 