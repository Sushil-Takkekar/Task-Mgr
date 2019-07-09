import { Bind_TASK, Bind_LIST, Bind_TAB_COUNT } from '../actions/types'
import { dashboard } from '../actions/dashboard';

const initialState = {
    tabs : {
        All: 0,
        Today : 0,
        Weekly : 0,
        Completed : 0
    },
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
        case Bind_TAB_COUNT:
            return {
                ...state,
                tabs: {
                    All: (action.payload.all !== undefined) ? action.payload.all : state.tabs.All,
                    Today: (action.payload.today !== undefined) ? action.payload.today : state.tabs.Today,
                    Weekly: (action.payload.weekly !== undefined) ? action.payload.weekly : state.tabs.Weekly,
                    Completed: (action.payload.completed !== undefined) ? action.payload.completed : state.tabs.Completed,
                }
            }
        default:
            return state
    }
}

export default Dashboard