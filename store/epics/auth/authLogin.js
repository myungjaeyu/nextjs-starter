import { ofType } from 'redux-observable'

import { of } from 'rxjs'
import { mergeMap, catchError, map, tap, delay } from 'rxjs/operators'
import { request } from 'universal-rxjs-ajax'

import { AUTH_LOGIN } from '../../constants'
import { authLoginSuccess, authLoginFailure } from '../../modules/auth'

export const authLogin$ = (action$) =>
    action$.pipe(
        ofType(AUTH_LOGIN),
        tap(e => console.log(e)),
        mergeMap(action =>
            request({
                url: `https://api.github.com/users/myungjaeyu`
            })
            .pipe(
                delay(1000),
                map(() =>
                    authLoginSuccess(
                        {
                            token: 'afaf',
                            user: {
                                username: action.payload.username
                            }
                        }
                    )
                ),
                catchError(() =>
                    of(
                        authLoginFailure(
                            { error: [] }
                        )
                    )
                )
            )
        )
    ) 