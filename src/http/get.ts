import axios from "@/plugins/axios";

export default (url: string, data: any, headers: any) => {
    return axios({
        method: 'get'
        , headers: headers
        , url: url
        , params: data
    })
    .then(res => {
        return res;
    })
}