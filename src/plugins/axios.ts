import axios from "axios";

const instance = axios.create({
    timeout: 1000
})

instance.interceptors.request.use(config => {
    console.log(config)
    return config
})

instance.interceptors.response.use(res => {
    console.log(res)
    return res
})

export default instance