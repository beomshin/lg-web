import axios from "@/plugins/axios";

const get = (url: string, data: any) => {
    return axios({
        method: 'get'
        , url: url
        , params: data
    })
        .then(res => {
            return res;
        })
}

export default get;