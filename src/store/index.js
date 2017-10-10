import { applyMiddleware, compose, createStore, Middleware } from 'redux'

// Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'


import reducers from '../reducers'
import initialState from './initialState'

const sagaMiddleware = createSagaMiddleware()

function getMiddleware(): Middleware[] {
	let middleware = [sagaMiddleware]
	if (__RAVEN__) {
		const { RavenMiddleware } = require('../middlewares')
		middleware = [RavenMiddleware, ...middleware]
	}

	return middleware
}

const	store = createStore(
	reducers,
	initialState,
	compose(applyMiddleware(...getMiddleware())),
)

sagaMiddleware.run(rootSaga)

export default store
