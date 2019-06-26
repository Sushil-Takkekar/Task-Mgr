import axios from 'axios'

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
            const auth_res = await axios.post('/users/', JSON.stringify(user), req_config);
            resolve(auth_res.data)
        }catch(err) {
            reject(err.response.status)
        }
    })
}

export {
    login_user,
    create_user
}