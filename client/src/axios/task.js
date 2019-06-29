import axios from 'axios'
import setAuthToken from './setAuthToken'

const req_config = {
    headers : {
        'Content-Type' : 'application/json'   
    }
}

/** make api call to get tasks **/
const getTasks = (sortBy = 'completed_asc', list, completed, skip = 0, limit = 10) => {
    return new Promise(async (resolve, reject) => {
        // set authentication token in header
        setAuthToken()
        try {
            const tasks = await axios.get('/tasks', {
                params: {
                    sortBy,
                    list,
                    completed,
                    skip,
                    limit
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