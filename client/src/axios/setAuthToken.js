import axios from 'axios'

const setAuthToken = () => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common = {
        "Authorization": `Bearer ${token}`
    }
}

export default setAuthToken
