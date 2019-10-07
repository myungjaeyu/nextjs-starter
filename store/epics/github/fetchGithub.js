import { ofType } from 'redux-observable'

import { of } from 'rxjs'
import { mergeMap, catchError, map, tap } from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'

import { FETCH_GITHUB } from '../../constants'
import { fetchGithubSuccess, fetchGithubFailure } from '../../actions'

export const fetchGithub$ = (action$, store$) =>
    action$.pipe(
        ofType(FETCH_GITHUB),
        tap(e => console.log(e)),
        mergeMap(action =>
            request({
                url: `https://api.github.com/users/${ store$.value.github.username }`
            })
            .pipe(
                map(response =>
                    fetchGithubSuccess(
                        response.response
                    )
                ),
                catchError(error =>
                    of(
                        fetchGithubFailure(
                            error.xhr.response
                        )
                    )
                )
            )
        )
    ) 