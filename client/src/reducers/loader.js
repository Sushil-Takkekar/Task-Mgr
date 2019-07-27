import { Loader_SHOW, Loader_HIDE } from  '../actions/types'

const initialState = false

const Loader = (state = initialState, action) => {
    switch(action.type) {
        case Loader_SHOW :
            return true
        case Loader_HIDE :
            return false
        default :
            return state
    }
}

export default Loader