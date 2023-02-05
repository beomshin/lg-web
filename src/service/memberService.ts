import post from "@/http/post";
import get from "@/http/get";
import post2 from "@/http/post2";
import loginMember from "@/dto/member/LoginMember";

export default {
    login: (data: loginMember, headers: any) => {
        return post2('/be/login', JSON.stringify(data), headers);
    },
    sign: (data: any) => {
        return post('/be/sign/member', data);
    },
    findId: (data: any) => {
        return get('/be/sign/find/id', data);
    },
    postEmail: (data: any) => {
        return post('/be/sign/post/email', data);
    },
    verifyEmail: (url: any, data: any) => {
        return get(url, data);
    },
    memberInfo: (data: any, headers: any) => {
        return post2('/be/member/pq/info', data, headers);
    }
}
