import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducers from './reducers'
import epics from './epics'

export default (initialState) => {

    const epicMiddleware = createEpicMiddleware()

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(epicMiddleware)
    )

    epicMiddleware.run(epics)

    return store
} 