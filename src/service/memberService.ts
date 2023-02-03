import post from "@/http/post";
import get from "@/http/get";
import post2 from "@/http/post2";

export default {
    login: (data: any) => {
        return post('/login', data);
    },
    sign: (data: any) => {
        return post('/sign/member', data);
    },
    findId: (data: any) => {
        return get('/sign/find/id', data);
    },
    postEmail: (data: any) => {
        return post('/sign/post/email', data);
    },
    verifyEmail: (url: any, data: any) => {
        return get(url, data);
    },
    memberInfo: (data: any, headers: any) => {
        return post2('/member/pq/info', data, headers);
    }
}
