import { handleActions } from 'redux-actions';
import { user } from '../actions'
import initialState from '../store/initialState'

const user = handleActions({
  SET_SETTINGS: (state, user) => ({
    userSettings: payload
  }),
}, initialState.user;


export default handleActions({
	[user.setSettings]: (store, { payload }) =>
		({ ...store, userSettings: payload }),
}, initialState.user)
