import get from "@/http/get";
import post from "@/http/post";
import MemberLoginDto from "@/dto/etc/MemberLoginDto";
import MemberSignDto from "@/dto/etc/MemberSignDto";
import MemberCheckId from "@/dto/etc/MemberCheckId";
import MemberPostEmail from "@/dto/etc/MemberPostEmail";
import MemberVerifyEmail from "@/dto/etc/MemberVerifyEmail";
import MemberInfo from "@/dto/etc/MemberInfo";
import MemberChangeInfo from "@/dto/etc/MemberChangeInfo";
import MemberChangePasword from "@/dto/etc/MemberChangePasword";
import MemberFindId from "@/dto/etc/MemberFindId";

export default {
    MemberLogin: (data: MemberLoginDto, headers: any, subUrl: string) => {
        return post('/be/login', data, headers);
    },
    MemberSign: (data: MemberSignDto, headers: any, subUrl: string) => {
        return post('/be/sign/member', data, headers);
    },
    MemberCheckId: (data: MemberCheckId, headers: any, subUrl: string) => {
        return get('/be/sign/find/id', data, headers);
    },
    MemberPostEmail: (data: MemberPostEmail, headers: any, subUrl: string) => {
        return post('/be/sign/post/email', data, headers);
    },
    MemberVerifyEmail: (data: MemberVerifyEmail, headers: any, subUrl: string) => {
        return get(`/be/sign/verify/email/${subUrl}`, data, headers);
    },
    MemberInfo: (data: MemberInfo, headers: any, subUrl: string) => {
        return post('/be/member/pq/info', data, headers);
    },
    MemberChangeInfo: (data: MemberChangeInfo, headers: any, subUrl: string) => {
        return post('/be/member/pq/change/member/info', data, headers);
    },
    MemberChangePassword: (data: MemberChangePasword, headers: any, subUrl: string) => {
        return post('/be/member/update/pw', data, headers);
    },
    MemberFindId: (data: MemberFindId, headers: any, subUrl: string) => {
        return post('/be/member/find/id', data, headers);
    }
}
