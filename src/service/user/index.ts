import get from '@/http/get'
import post from '@/http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import FindIdUserRequestDto from "@/dto/user/FindIdUserRequestDto";
import CheckIdUserRequestDto from "@/dto/user/CheckIdUserRequestDto";
import UpdatePwUserRequestDto from "@/dto/user/UpdatePwUserRequestDto";
import UpdateInfoUserRequestDto from "@/dto/user/UpdateInfoUserRequestDto";

export default {
    findIdUser: (data: FindIdUserRequestDto) => { // 회원 아이디 조회
        return post(EndPoint.FIND_ID_USER, data, HeaderUtils.NORMAL)
    },
    findPwUser: (data: CheckIdUserRequestDto) => { // 회원 로그인/본인인증 조회
        return post(EndPoint.FIND_PW_USER, data, HeaderUtils.NORMAL)
    },
    findInfoUser: () => { // 회원 정보 조회
        return post(EndPoint.FIND_INFO_USER, ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    updatePwUser: (data: UpdatePwUserRequestDto) => { // 회원 비밀번호 업데이트
        return post(EndPoint.UPDATE_PW_USER, data, HeaderUtils.NORMAL)
    },
    updateInfoUser: (data: UpdateInfoUserRequestDto) => { // 회원 정보 수정
        return post(EndPoint.UPDATE_INFO_USER, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    }
}
