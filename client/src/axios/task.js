import axios from 'axios'
import setAuthToken from './setAuthToken'
import { setFilterDate } from '../utils/formatDate'

const req_config = {
    headers : {
        'Content-Type' : 'application/json'   
    }
}

/** make api call to get tasks **/
const getTasks = ({sortBy = 'completed_asc', list, completed, skip = 0, limit = 10, till_due_date}) => {
    return new Promise(async (resolve, reject) => {
        const today = new Date()
        if(till_due_date === 'TODAY')
            var till_date = setFilterDate(today)
        if(till_due_date === 'WEEKLY')
            var till_date = setFilterDate(today.setDate(today.getDate() + 7))

        // set authentication token in header
        setAuthToken()
        try {
            const tasks = await axios.get('/tasks', {
                params: {
                    sortBy,
                    list,
                    completed,
                    skip,
                    limit,
                    till_date
                }
            })
            resolve(tasks.data)
        }catch(err) {
            reject(err.response)
        }
    })
}

/** make api call to create task **/
const addTask = ({ title, description, due_date, list}) => {
    return new Promise(async (resolve, reject) => {
        const task = {
            title,
            description,
            due_date,
            list
        }
        // set authentication token in header
        setAuthToken()
        try {
            const new_task = await axios.post('/tasks', JSON.stringify(task), req_config)
            resolve(new_task.data)
        }catch(err) {
            reject(err.response)
        }
    })
}

const updateTask = (task) => {
    return new Promise(async (resolve, reject) => {
        const req_data = {
            title: task.title,
            description: task.description,
            completed: task.completed,
            due_date: task.due_date,
            list: task.list
        }
        // set authentication token in header
        setAuthToken()
        try {
            const new_task = await axios.patch(`/tasks/${task._id}`, JSON.stringify(req_data), req_config)
            resolve(new_task.data)
        }catch(err) {
            reject(err.response)
        }
    })
}

const deleteTask = (task_id) => {
    return new Promise(async (resolve, reject) => {
        // set authentication token in header
        setAuthToken()
        try {
            const res = await axios.delete(`/tasks/${task_id}`, req_config)
            resolve(res.data)
        }catch(err) {
            reject(err.response)
        }
    })
}

export {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}