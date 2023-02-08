import get from "@/http/get";
import post from "@/http/post";
import loginMember from "@/dto/member/LoginMember";
import SignMember from "@/dto/member/SignMember";
import CheckOverlapId from "@/dto/member/CheckOverlapId";
import PostEmail from "@/dto/member/PostEmail";
import VerifyEmail from "@/dto/member/VerifyEmail";

export default {
    login: (data: loginMember, headers: any) => {
        return post('/be/login', data, headers);
    },
    sign: (data: SignMember, headers: any) => {
        return post('/be/sign/member', data, headers);
    },
    checkOverlapId: (data: CheckOverlapId) => {
        return get('/be/sign/find/id', data, null);
    },
    postEmail: (data: PostEmail, headers: any) => {
        return post('/be/sign/post/email', data, headers);
    },
    verifyEmail: (url: string, txId: string, data: VerifyEmail) => {
        return get(url + `/${txId}`, data, null);
    },
    memberInfo: (data: any, headers: any) => {
        return post('/be/member/pq/info', data, headers);
    }
}
