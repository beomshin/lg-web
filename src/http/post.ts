import axios from "@/plugins/axios";

const post = (url: string, data: any, headers: any) => {
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

export default post;