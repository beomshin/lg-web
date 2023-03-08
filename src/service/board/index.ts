import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
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


export default {
    deleteAnonymBoard: (data: DeleteAnonymBoardRequestDto) => {
        return post('/api/public/board/delete/anonym', data, HeaderUtils.NORMAL)
    },
    deleteUserBoard: (data: DeleteUserBoardRequestDto) => {
        return post('/api/board/delete/user', data, HeaderUtils.AUTH_HEADER)
    },
    loginAnonymBoard: (data: LoginAnonymBoardRequestDto) => {
        return post('/api/public/board/login/anonym', data, HeaderUtils.NORMAL);
    },
    loginUserBoard: (data: LoginUserBoardRequestDto) => {
        return post('/api/board/login/user', data, HeaderUtils.AUTH_HEADER)
    },
    findAllListBoard: (params: FindAllListBoardRequestDto) => {
        return get('/api/public/board/find/all/list', params, HeaderUtils.NORMAL)
    },
    findUserListBoard: (params: FindUserListBoardRequestDto) => {
        return get('/api/board/find/user/list', params, HeaderUtils.AUTH_HEADER)
    },
    findAnonymDetailBoard: (id: string) => {
        return get(`/api/public/board/find/anonym/detail/${id}`, {}, HeaderUtils.NORMAL)
    },
    findUserDetailBoard: (id: string) => {
        return get(`/api/board/find/user/detail/${id}`, {}, HeaderUtils.AUTH_HEADER)
    },
    enrollUserBoard: (data: EnrollUserBoardRequestDto) => {
        return post('/api/board/enroll/user', data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    enrollAnonymBoard: (data: EnrollAnonymBoardRequestDto) => {
        return post('/api/public/board/enroll/anonym', data, HeaderUtils.MULTIPART_HEADER)
    },
    enrollLawFirmBoard: (data: EnrollLawFirmBoardRequestDto) => {
        return post('/api/board-position/enroll/lawfirm', data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    recommendBoard: (data: RecommendBoardRequestDto) => {
        return post('/api/board/recommend', data, HeaderUtils.AUTH_HEADER)
    },
    deleteRecommendBoard: (data: DeleteRecommendBoardRequestDto) => {
        return post('/api/board/delete/recommend', data, HeaderUtils.AUTH_HEADER)
    },
    reportBoard: (data: ReportBoardRequestDto) => {
        return post('/api/public/board/report', data, HeaderUtils.NORMAL)
    },
    updateUserBoard: (data: UpdateUserBoardRequestDto) => {
        return post('/api/board/update/user', data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    updateAnonymBoard: (data: UpdateAnonymBoardRequestDto) => {
        return post('/api/public/board/update/anonym', data, HeaderUtils.MULTIPART_HEADER)
    }
}
