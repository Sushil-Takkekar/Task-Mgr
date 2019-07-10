import axios from 'axios'
import setAuthToken from './setAuthToken'

const req_config = {
    headers : {
        'Content-Type' : 'application/json'   
    }
}

/** make api call to login user **/
const login_user = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const auth_res = await axios.post('/users/login', JSON.stringify(user), req_config)
            resolve(auth_res.data)
        }catch(err) {
            reject(err.response.status)
        }
    })
}

/** make api call to create user **/
const create_user = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const auth_res = await axios.post('/users/', JSON.stringify(user), req_config)
            resolve(auth_res.data)
        }catch(err) {
            reject(err.response.status)
        }
    })
}

/** make api call to create new list **/
const add_list = (list) => {
    setAuthToken()
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post('/users/list', JSON.stringify(list), req_config)
            resolve(res.data)
        }catch(err) {
            reject(err)
        }
    })
}

/** make api call to create new list **/
const update_list = (list) => {
    const req_data = {
        title: list.title,
        count: list.count
    }
    // set authentication token in header
    setAuthToken()
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.patch(`/users/list/${list._id}`, JSON.stringify(req_data), req_config)
            resolve(res.data)
        }catch(err) {
            reject(err)
        }
    })
}

/** make api call to get all lists **/
const get_all_lists = () => {
    // set authentication token in header
    setAuthToken()
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get('/users/lists')
            resolve(res.data)
        }catch(err) {
            reject(err)
        }
    })
}

/** make api call to create new list **/
const delete_list = (list_id) => {
    // set authentication token in header
    setAuthToken()
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.delete(`/users/list/${list_id}`, req_config)
            resolve(res.data)
        }catch(err) {
            reject(err)
        }
    })
}

export {
    login_user,
    create_user,
    add_list,
    update_list,
    get_all_lists,
    delete_list
}