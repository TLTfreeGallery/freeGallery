import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { user } = createActions({
  USER: {
    PROFILE: {
      REQUEST
    },
    SET_SETTINGS: payload => payload
  }
})
