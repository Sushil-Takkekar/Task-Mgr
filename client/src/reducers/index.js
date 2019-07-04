import { combineReducers } from 'redux'
import Alert from './alert'
import Active_Link from './activeTab'
import Auth from './auth'
import Dashboard from './dashboard'
import PopupStatus from './popup'

const rootReducer = combineReducers({
    Alert,
    Auth,
    Dashboard,
    PopupStatus,
    Active_Link
})

export default rootReducer