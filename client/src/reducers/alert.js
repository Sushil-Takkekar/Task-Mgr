import { Alert_SHOW, Alert_HIDE } from '../actions/types'

const Alert = (state = false, action) => {
    switch(action.type) {
        case Alert_SHOW:
            return true
        case Alert_HIDE:
            return false
        default:
            return state
    }
}

export default Alert