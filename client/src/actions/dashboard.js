import { getTasks } from '../axios/task'
import {
    LIST_TASK,
    Tasks_ALL, Tasks_TODAY,
    Tasks_WEEKLY, Tasks_COMPLETED,
    Bind_TASK, Bind_LIST
} from './types'

export const dashboardReq = (req_type) => dispatch => {
    if(req_type === LIST_TASK) {
        /** make api call to get all the lists **/

        /** make api call to get all the tasks **/
        getTasks().then((res) => {
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this to redirect to home/login
        })
    }
    else if(req_type === Tasks_ALL) {
        getTasks().then((res) => {
            // Show msg if no task
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this
        })
    }
    else if(req_type === Tasks_COMPLETED) {
        getTasks({ completed:'true' }).then((res) => {
            // Show msg if no task
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this
        })
    }
}