import {
    Popup_SUCCESS, Popup_FAIL, Popup_RESET
} from '../actions/types'

const initialState = ''

const PopupStatus = (state = initialState, action) => {
    switch(action.type) {
        case Popup_SUCCESS:
            return 'SUCCESS'
        case Popup_FAIL:
            return 'FAIL'
        case Popup_RESET:
            return ''
        default: 
            return state
    }
}

export default PopupStatus