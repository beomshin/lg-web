import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
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


export default  {
    applyLawFirm: (data: ApplyLawFirmRequestDto) => { // 로펌 신청하기
        return post('/api/law-firm/apply', data, HeaderUtils.AUTH_HEADER);
    },
    confirmLawFirm: (data: ConfirmLawFirmRequestDto) => { // 로펌 신청 접수하기
        return post('/api/law-firm/confirm', data, HeaderUtils.AUTH_HEADER);
    },
    enrollLawFirm: (data: EnrollLawFirmRequestDto) => { // 로펌 만들기
        return post('/api/law-firm/enroll', data, HeaderUtils.AUTH_MULTIPART_HEADER);
    },
    deleteLawFirm: (data: DeleteLawFirmRequestDto) => { // 로펌 삭제하기
        return post('/api/law-firm/delete', data, HeaderUtils.AUTH_HEADER);
    },
    quitLawFirm: (data: QuitLawFirmRequestDto) => { // 로펌 탈퇴하기
        return post('/api/law-firm/quit', data, HeaderUtils.AUTH_HEADER);
    },
    userDeleteLawFirm: (data: UserDeleteLawFirmRequestDto) => { // 로펌 회원 탈퇴시키기
        return post('/api/law-firm/user/delete', data, HeaderUtils.AUTH_HEADER);
    },
    findAllLawFirmList: (params: FindAllLawFirmListRequestDto) => { // 로펌 리스트 조회하기
        return get('/api/public/law-firm/list', params, HeaderUtils.NORMAL);
    },
    findLawFirmDetail: (id: string) => { // 로펌 상세 조회하기
        return get(`/api/public/law-firm/${id}`, {}, HeaderUtils.NORMAL);
    },
    findMyLawFirm: () => { // 내 로펌 정보 조회
        return get('/api/law-firm/find/my', {}, HeaderUtils.AUTH_HEADER);
    },
    findApplyListMyLawFirm: (params: FindApplyListMyLawFirmRequestDto) => { // 로펌 지원자 리스트 조회하기
        return get('/api/law-firm/find/apply/list/my', params, HeaderUtils.AUTH_HEADER);
    },
    findUserListMyLawFirm: (params: FindUserListMyLawFirmRequestDto) => { // 로펌 유저 리스트 조회하기
        return get('/api/law-firm/find/user/list/my', params, HeaderUtils.AUTH_HEADER);
    },
    activeLawFirm: (data: ActiveLawFirmRequestDto) => { // 로펌 활성화&비활성화 하기
        return post('/api/law-firm/active', data, HeaderUtils.AUTH_HEADER);
    },
    updateLawFirm: (data: UpdateLawFirmRequestDto) => { // 로펌 수정하기
        return post('/api/law-firm/update', data, HeaderUtils.AUTH_MULTIPART_HEADER);
    }
}
