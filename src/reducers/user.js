import { handleActions } from 'redux-actions';
import { user } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[user.setSettings]: (store, { payload }) =>
		({ ...store, userSettings: payload }),
	[user.addToCard]: store =>
		({ ...store, userCounter: ++store.userCounter }),
	[user.showInform]: store =>
		({ ...store, isShow: !store.isShow }),
}, initialState.user)
