import { ofType } from 'redux-observable'

import { of } from 'rxjs'
import { mergeMap, catchError, map, tap, delay } from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'

import { FETCH_GITHUB } from '../../constants'
import { fetchGithubSuccess, fetchGithubFailure } from '../../modules/github'

export const fetchGithub$ = (action$, store$) =>
    action$.pipe(
        ofType(FETCH_GITHUB),
        tap(e => console.log(e)),
        mergeMap(action =>
            request({
                url: `https://api.github.com/users/${ action.payload }`
            })
            .pipe(
                map(({ response }) =>
                    fetchGithubSuccess(
                        { data: response }
                    )
                ),
                catchError(({ xhr: { response }}) =>
                    of(
                        fetchGithubFailure(
                            { error: response }
                        )
                    )
                )
            )
        )
    ) 