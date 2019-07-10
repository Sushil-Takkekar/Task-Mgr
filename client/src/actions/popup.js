import { add_list, update_list, delete_list } from '../axios/user'
import { addTask, updateTask, deleteTask } from '../axios/task'
import { setFilterDate } from '../utils/formatDate'

import {
    Popup_AddList, Popup_EditList, Popup_DeleteList,
    Popup_AddTask, Popup_EditTask, Popup_DeleteTask,
    Popup_SUCCESS, Popup_FAIL, Popup_RESET
} from './types'

export const popupAction = (req_type, data) => async dispatch => {
    if(req_type === Popup_AddList) {
        try {
            /** make api call to add list **/
            await add_list({
                title: data
            })
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }else if(req_type === Popup_EditList) {
        try {
            /** make api call to edit list **/
            await update_list(data)
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }else if(req_type === Popup_DeleteList) {
        try {
            /** make api call to delete list **/
            await delete_list(data)
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }
    else if(req_type === Popup_AddTask) {
        const new_task = {
            title : data.title
        }
        if(data.description === '' || data.description === undefined)
            new_task.description = ''
        else
            new_task.description = data.description
        if(data.due_date === '' || data.due_date === undefined)
            new_task.due_date = setFilterDate(new Date())
        else
            new_task.due_date = setFilterDate(data.due_date)
        if(data.list != '' && data.list != undefined)
            new_task.list = data.list

        try {
            /** make api call to add task **/
            await addTask(new_task)
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }else if(req_type === Popup_EditTask) {
        try {
            /** make api call to add task **/
            await updateTask(data)
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }else if(req_type === Popup_DeleteTask) {
        try {
            /** make api call to delete task **/
            await deleteTask(data)
            dispatch({
                type: Popup_SUCCESS
            })
        }catch(err) {
            dispatch({
                type: Popup_FAIL
            })
        }
    }
}

export const setPopupStatus = (req_type) => dispatch => {
    if(req_type === Popup_RESET) {
        dispatch({
            type: Popup_RESET
        })
    }else if(req_type === Popup_SUCCESS) {
        dispatch({
            type: Popup_SUCCESS
        })
    }else if(req_type === Popup_FAIL) {
        dispatch({
            type: Popup_FAIL
        })
    }
}
