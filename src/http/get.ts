import axios from "@/plugins/axios";

const get = (url: string, data: any, headers: any) => {
    return axios({
        method: 'get'
        , url: url
        , params: data
        , headers: headers
    })
        .then(res => {
            return res;
        })
}

export default get;