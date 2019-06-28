import { Bind_TASK, Bind_LIST } from '../actions/types'
import { dashboard } from '../actions/dashboard';

const initialState = {
    lists : [],
    tasks: []
}

const Dashboard = (state = initialState, action) => {
    switch(action.type) {
        case Bind_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case Bind_LIST:
            return {
                ...state,
                lists: action.payload
            }
        default:
            return state
    }
}

export default Dashboard