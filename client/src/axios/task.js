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

export {
    getTasks
}