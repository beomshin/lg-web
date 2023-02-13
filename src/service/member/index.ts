import get from "@/http/get";
import post from "@/http/post";
import MemberLoginDto from "@/dto/member/MemberLoginDto";
import MemberSignDto from "@/dto/member/MemberSignDto";
import MemberCheckId from "@/dto/member/MemberCheckId";
import MemberPostEmail from "@/dto/member/MemberPostEmail";
import MemberVerifyEmail from "@/dto/member/MemberVerifyEmail";
import MemberInfo from "@/dto/member/MemberInfo";
import MemberSenderAlarmList from "@/dto/member/MemberSenderAlarmList";
import MemberReceiveAlarmList from "@/dto/member/MemberReceiveAlarmList";

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
    MemberReceiveAlarmList: (data: MemberReceiveAlarmList, headers: any, subUrl: string) => {
        return post('/be/member/pq/receive/alarm', data, headers);
    },
    MemberSenderAlarmList: (data: MemberSenderAlarmList, headers: any, subUrl: string) => {
        return post('/be/member/pq/send/alarm', data, headers);
    }
}
