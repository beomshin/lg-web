import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import SignSendEmailRequestDto from "@/dto/sign/SignSendEmailRequestDto";
import SignUserRequestDto from "@/dto/sign/SignUserRequestDto";
import CheckIdSignRequestDto from "@/dto/sign/CheckIdSignRequestDto";
import VerifyEmailSignRequestDto from "@/dto/sign/VerifyEmailSignRequestDto";

export default {
    checkIdSign: (params: CheckIdSignRequestDto) => {
        return get(EndPoint.CHECK_ID_SIGN, params, HeaderUtils.NORMAL)
    },
    sendEmailSign: (data: SignSendEmailRequestDto) => {
        return post(EndPoint.SEND_EMAIL_SIGN, data, HeaderUtils.NORMAL)
    },
    verifyEmailSign: (data: VerifyEmailSignRequestDto) => {
        return get(EndPoint.VERIFY_EMAIL_SIGN(data.txId), data.getParams(), HeaderUtils.NORMAL)
    },
    userSign: (data: SignUserRequestDto) => {
        return post(EndPoint.USER_SIGN, data, HeaderUtils.NORMAL)
    }
}
