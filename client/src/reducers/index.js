import { combineReducers } from 'redux'
import Alert from './alert'
import Active_Link from './activeTab'
import Auth from './auth'
import Dashboard from './dashboard'

const rootReducer = combineReducers({
    Alert,
    Auth,
    Dashboard,
    Active_Link
})

export default rootReducer