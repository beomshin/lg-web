import get from '../../http/get'
import post from '../../http/post'
import {useCookies} from "vue3-cookies";
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
import CookieCont from "@/constants/CookieCont";
const { cookies } = useCookies();

export default  {
    applyLawFirm: (data: ApplyLawFirmRequestDto) => { // 로펌 신청하기
        return post('/api/law-firm/apply', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    confirmLawFirm: (data: ConfirmLawFirmRequestDto) => { // 로펌 신청 접수하기
        return post('/api/law-firm/confirm', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    enrollLawFirm: (data: EnrollLawFirmRequestDto) => { // 로펌 만들기
        return post('/api/law-firm/enroll', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME), "Content-Type" : 'multipart/form-data' });
    },
    deleteLawFirm: (data: DeleteLawFirmRequestDto) => { // 로펌 삭제하기
        return post('/api/law-firm/delete', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    quitLawFirm: (data: QuitLawFirmRequestDto) => { // 로펌 탈퇴하기
        return post('/api/law-firm/quit', data,{ Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    userDeleteLawFirm: (data: UserDeleteLawFirmRequestDto) => { // 로펌 회원 탈퇴시키기
        return post('/api/law-firm/user/delete', data,{ Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    findAllLawFirmList: (params: FindAllLawFirmListRequestDto) => { // 로펌 리스트 조회하기
        return get('/api/public/law-firm/list', params,null);
    },
    findLawFirmDetail: (id: string) => { // 로펌 상세 조회하기
        return get(`/api/public/law-firm/${id}`, {},null);
    },
    findMyLawFirm: () => { // 내 로펌 정보 조회
        return get('/api/law-firm/find/my', {},{ Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    findApplyListMyLawFirm: (params: FindApplyListMyLawFirmRequestDto) => { // 로펌 지원자 리스트 조회하기
        return get('/api/law-firm/find/apply/list/my', params,{ Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    findUserListMyLawFirm: (params: FindUserListMyLawFirmRequestDto) => { // 로펌 유저 리스트 조회하기
        return get('/api/law-firm/find/user/list/my', params,{ Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    activeLawFirm: (data: ActiveLawFirmRequestDto) => { // 로펌 활성화&비활성화 하기
        return post('/api/law-firm/active', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME) });
    },
    updateLawFirm: (data: UpdateLawFirmRequestDto) => { // 로펌 수정하기
        return post('/api/law-firm/update', data, { Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME), "Content-Type" : 'multipart/form-data' });
    }
}
