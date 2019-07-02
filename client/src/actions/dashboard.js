import { getTasks } from '../axios/task'
import { get_all_lists } from '../axios/user'

import {
    LIST_TASK,
    Tasks_ALL, Tasks_TODAY,
    Tasks_WEEKLY, Tasks_COMPLETED,
    Bind_TASK, Bind_LIST
} from './types'

export const dashboardReq = (req_type) => dispatch => {
    const isListReq = req_type.substr(0, req_type.indexOf('_'))
    if(isListReq === 'List') {
        const list_id = req_type.substr(req_type.indexOf('_')+1, req_type.length)
        getTasks({ list: list_id }).then((res) => {
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this to redirect to home/login
        })
    }
    else if(req_type === LIST_TASK) {
        /** make api call to get all the lists **/
        get_all_lists().then((res) => {
            dispatch({
                type: Bind_LIST,
                payload: res
            })
        }).catch((err) => {
            // code this to redirect to home/login
        })

        /** make api call to get all the tasks **/
        getTasks({}).then((res) => {
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this to redirect to home/login
        })
    }
    else if(req_type === Tasks_ALL) {
        getTasks({}).then((res) => {
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
    else if(req_type === Tasks_TODAY) {
        getTasks({ till_due_date:'TODAY' }).then((res) => {
            // Show msg if no task
            dispatch({
                type: Bind_TASK,
                payload: res
            })
        }).catch((err) => {
            // code this
        })
    }
    else if(req_type === Tasks_WEEKLY) {
        getTasks({ till_due_date:'WEEKLY' }).then((res) => {
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