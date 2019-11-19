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
        mergeMap(action => {

            const { payload: { username, password } } = action

            return request({
                url: false || `https://api.github.com/users/myungjaeyu`,
                method: 'GET' || 'POST',
                body: {
                    username,
                    password
                },
                /*
                headers: {
                    Authorization: `Bearer `, // accessToken,
                }*/

            })
            .pipe(
                delay(1000),
                map((e) => {

                    const { error, token, user } = e.response

                    if (error) return authLoginFailure({ errors: [ error ] }) 

                    return authLoginSuccess(
                        {
                            token: token || 'afaf',
                            user: user || { username }
                        }
                    )

                }),
                catchError((e) => of(authLoginFailure({ errors: [ e.message ] })))
            )

        })
    ) 