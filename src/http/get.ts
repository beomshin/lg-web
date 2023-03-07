import axios from "@/plugins/axios";

export default (url: string, params: any, headers: any) => {
    return axios({
        method: 'get'
        , headers: headers
        , url: url
        , params: params
    })
    .then(res => {
        return res;
    })
}
