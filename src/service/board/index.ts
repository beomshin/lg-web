import get from '../../http/get'
import post from '../../http/post'
import {useCookies} from "vue3-cookies";
import DeleteAnonymBoardRequestDto from "@/dto/board/DeleteAnonymBoardRequestDto";
import DeleteUserBoardRequestDto from "@/dto/board/DeleteUserBoardRequestDto";
import LoginAnonymBoardRequestDto from "@/dto/board/LoginAnonymBoardRequestDto";
import LoginUserBoardRequestDto from "@/dto/board/LoginUserBoardRequestDto";
import FindAllListBoardRequestDto from "@/dto/board/FindAllListBoardRequestDto";
import FindUserListBoardRequestDto from "@/dto/board/FindUserListBoardRequestDto";
import EnrollUserBoardRequestDto from "@/dto/board/EnrollUserBoardRequestDto";
import EnrollAnonymBoardRequestDto from "@/dto/board/EnrollAnonymBoardRequestDto";
import EnrollLawFirmBoardRequestDto from "@/dto/board/EnrollLawFirmBoardRequestDto";
import RecommendBoardRequestDto from "@/dto/board/RecommendBoardRequestDto";
import DeleteRecommendBoardRequestDto from "@/dto/board/DeleteRecommendBoardRequestDto";
import ReportBoardRequestDto from "@/dto/board/ReportBoardRequestDto";
import UpdateUserBoardRequestDto from "@/dto/board/UpdateUserBoardRequestDto";
import UpdateAnonymBoardRequestDto from "@/dto/board/UpdateAnonymBoardRequestDto";
const { cookies } = useCookies();


export default {
    deleteAnonymBoard: (data: DeleteAnonymBoardRequestDto) => {
        return post('/api/public/board/delete/anonym', data,  null)
    },
    deleteUserBoard: (data: DeleteUserBoardRequestDto) => {
        return post('/api/board/delete/user', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    loginAnonymBoard: (data: LoginAnonymBoardRequestDto) => {
        return post('/api/public/board/login/anonym', data, null);
    },
    loginUserBoard: (data: LoginUserBoardRequestDto) => {
        return post('/api/board/login/user', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    findAllListBoard: (params: FindAllListBoardRequestDto) => {
        return get('/api/public/board/find/all/list', params, null)
    },
    findUserListBoard: (params: FindUserListBoardRequestDto) => {
        return get('/api/board/find/user/list', params, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    findAnonymDetailBoard: (id: string) => {
        return get(`/api/public/board/find/anonym/detail/${id}`, {}, {})
    },
    findUserDetailBoard: (id: string) => {
        return get(`/api/board/find/user/detail/${id}`, {}, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    enrollUserBoard: (data: EnrollUserBoardRequestDto) => {
        return post('/api/board/enroll/user', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log'), "Content-Type" : 'multipart/form-data'})
    },
    enrollAnonymBoard: (data: EnrollAnonymBoardRequestDto) => {
        return post('/api/public/board/enroll/anonym', data, { "Content-Type" : 'multipart/form-data' })
    },
    enrollLawFirmBoard: (data: EnrollLawFirmBoardRequestDto) => {
        return post('/api/board-position/enroll/lawfirm', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log'), "Content-Type" : 'multipart/form-data'})
    },
    recommendBoard: (data: RecommendBoardRequestDto) => {
        return post('/api/board/recommend', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    deleteRecommendBoard: (data: DeleteRecommendBoardRequestDto) => {
        return post('/api/board/delete/recommend', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') })
    },
    reportBoard: (data: ReportBoardRequestDto) => {
        return post('/api/public/board/report', data, {})
    },
    updateUserBoard: (data: UpdateUserBoardRequestDto) => {
        return post('/api/board/update/user', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log'), "Content-Type" : 'multipart/form-data'})
    },
    updateAnonymBoard: (data: UpdateAnonymBoardRequestDto) => {
        return post('/api/public/board/update/anonym', data, { "Content-Type" : 'multipart/form-data' })
    }
}
