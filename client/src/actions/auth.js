import { login_user } from '../axios/user'
import { Login_SUCCESS, Login_FAIL, Alert_SHOW, Alert_HIDE } from './types'

/**
 * Login status action.
 * Set action based on API call response.
 */
export const login = (user) => dispatch => {
    login_user(user).then((res) => {
        dispatch({
            type: Login_SUCCESS,
            payload: res
        })
        /** Hide Alert **/
        dispatch({
            type: Alert_HIDE
        })
    }).catch((err) => {
        dispatch({
            type: Login_FAIL
        })
        /** Show Alert **/
        dispatch({
            type: Alert_SHOW
        })
    })
}