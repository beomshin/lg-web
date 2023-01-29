import axios from "@/plugins/axios";

const post = (url: string, data: any) => {
    return axios({
        method: 'post'
        , url: url
        , data: data
    })
        .then(res => {
            return res;
        })
}

export default post;