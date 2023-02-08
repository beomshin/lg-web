import get from "../../http/get";
import post from "../../http/post";
import loginMember from "../../dto/member/LoginMember";
import SignMember from "../../dto/member/SignMember";
import CheckOverlapId from "../../dto/member/CheckOverlapId";
import PostEmail from "../../dto/member/PostEmail";
import VerifyEmail from "../../dto/member/VerifyEmail";

export default {
    MemberLogin: (data: loginMember, headers: any, subUrl: string) => {
        return post('/be/login', data, headers);
    },
    MemberSign: (data: SignMember, headers: any, subUrl: string) => {
        return post('/be/sign/member', data, headers);
    },
    MemberCheckId: (data: CheckOverlapId, headers: any, subUrl: string) => {
        return get('/be/sign/find/id', data, headers);
    },
    MemberPostEmail: (data: PostEmail, headers: any, subUrl: string) => {
        return post('/be/sign/post/email', data, headers);
    },
    MemberVerifyEmail: (data: VerifyEmail, headers: any, subUrl: string) => {
        return get(`/be/sign/verify/email/${subUrl}`, data, headers);
    },
    MemberInfo: (data: any, headers: any, subUrl: string) => {
        return post('/be/member/pq/info', data, headers);
    }
}
