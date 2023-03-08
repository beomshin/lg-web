import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/http/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import ApplyLawFirmRequestDto from "@/dto/lawFirm/ApplyLawFirmRequestDto";
import ConfirmLawFirmRequestDto from "@/dto/lawFirm/ConfirmLawFirmRequestDto";
import EnrollLawFirmRequestDto from "@/dto/lawFirm/EnrollLawFirmRequestDto";
import DeleteLawFirmRequestDto from "@/dto/lawFirm/DeleteLawFirmRequestDto";
import QuitLawFirmRequestDto from "@/dto/lawFirm/QuitLawFirmRequestDto";
import UserDeleteLawFirmRequestDto from "@/dto/lawFirm/UserDeleteLawFirmRequestDto";
import FindAllLawFirmListRequestDto from "@/dto/lawFirm/FindAllLawFirmListRequestDto";
import FindApplyListMyLawFirmRequestDto from "@/dto/lawFirm/FindApplyListMyLawFirmRequestDto";
import FindUserListMyLawFirmRequestDto from "@/dto/lawFirm/FindUserListMyLawFirmRequestDto";
import ActiveLawFirmRequestDto from "@/dto/lawFirm/ActiveLawFirmRequestDto";
import UpdateLawFirmRequestDto from "@/dto/lawFirm/UpdateLawFirmRequestDto";
import FindLawFirmDetailRequestDto from "@/dto/lawFirm/FindLawFirmDetailRequestDto";


export default  {
    applyLawFirm: (data: ApplyLawFirmRequestDto) => { // 로펌 신청하기
        return post(EndPoint.APPLY_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    confirmLawFirm: (data: ConfirmLawFirmRequestDto) => { // 로펌 신청 접수하기
        return post(EndPoint.CONFIRM_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    enrollLawFirm: (data: EnrollLawFirmRequestDto) => { // 로펌 만들기
        return post(EndPoint.ENROLL_LAW_FIRM, data, HeaderUtils.AUTH_MULTIPART_HEADER);
    },
    deleteLawFirm: (data: DeleteLawFirmRequestDto) => { // 로펌 삭제하기
        return post(EndPoint.DELETE_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    quitLawFirm: (data: QuitLawFirmRequestDto) => { // 로펌 탈퇴하기
        return post(EndPoint.QUIT_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    userDeleteLawFirm: (data: UserDeleteLawFirmRequestDto) => { // 로펌 회원 탈퇴시키기
        return post(EndPoint.USER_DELETE_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    findAllLawFirmList: (params: FindAllLawFirmListRequestDto) => { // 로펌 리스트 조회하기
        return get(EndPoint.FIND_ALL_LAW_FIRM_LIST, params, HeaderUtils.NORMAL);
    },
    findLawFirmDetail: (params: FindLawFirmDetailRequestDto) => { // 로펌 상세 조회하기
        return get(EndPoint.FIND_LAW_FIRM_DETAIL(params.id), ParamsUtils.EMPTY, HeaderUtils.NORMAL);
    },
    findMyLawFirm: () => { // 내 로펌 정보 조회
        return get(EndPoint.FIND_MY_LAW_FIRM, ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER);
    },
    findApplyListMyLawFirm: (params: FindApplyListMyLawFirmRequestDto) => { // 로펌 지원자 리스트 조회하기
        return get(EndPoint.FIND_APPLY_LIST_MY_LAW_FIRM, params, HeaderUtils.AUTH_HEADER);
    },
    findUserListMyLawFirm: (params: FindUserListMyLawFirmRequestDto) => { // 로펌 유저 리스트 조회하기
        return get(EndPoint.FIND_USER_LIST_MY_LAW_FIRM, params, HeaderUtils.AUTH_HEADER);
    },
    activeLawFirm: (data: ActiveLawFirmRequestDto) => { // 로펌 활성화&비활성화 하기
        return post(EndPoint.ACTIVE_LAW_FIRM, data, HeaderUtils.AUTH_HEADER);
    },
    updateLawFirm: (data: UpdateLawFirmRequestDto) => { // 로펌 수정하기
        return post(EndPoint.UPDATE_LAW_FIRM, data, HeaderUtils.AUTH_MULTIPART_HEADER);
    }
}
