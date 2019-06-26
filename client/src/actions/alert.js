import { Alert_SHOW, Alert_HIDE } from './types'

export const alert = (val) => dispatch => {
    if(val === 'SHOW') {
        dispatch({
            type: Alert_SHOW
        })
    }else {
        dispatch({
            type: Alert_HIDE
        })
    }
}