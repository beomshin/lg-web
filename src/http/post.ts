import axios from "@/plugins/axios";

export default (url: string, data: any, headers: any) => {
    return axios({
        method: 'post'
        , headers: headers
        , url: url
        , data: data
    })
    .then(res => {
        return res;
    })
}