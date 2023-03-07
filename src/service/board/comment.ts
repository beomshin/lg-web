import get from '../../http/get'
import post from '../../http/post'
import {useCookies} from "vue3-cookies";
import DeleteAnonymCommentBoardRequestDto from "@/dto/board/comment/DeleteAnonymCommentBoardRequestDto";
import DeleteUserCommentBoardRequestDto from "@/dto/board/comment/DeleteUserCommentBoardRequestDto";
import EnrollUserCommentBoardRequestDto from "@/dto/board/comment/EnrollUserCommentBoardRequestDto";
import EnrollAnonymCommentBoardRequestDto from "@/dto/board/comment/EnrollAnonymCommentBoardRequestDto";
import FindAnonymParentCommentBoardRequestDto from "@/dto/board/comment/FindAnonymParentCommentBoardRequestDto";
import FindUserParentCommentBoardRequestDto from "@/dto/board/comment/FindUserParentCommentBoardRequestDto";
import FindAnonymChildrenCommentBoardRequestDto from "@/dto/board/comment/FindAnonymChildrenCommentBoardRequestDto";
import FindUserChildrenCommentBoardRequestDto from "@/dto/board/comment/FindUserChildrenCommentBoardRequestDto";
import ReportCommentBoardRequestDto from "@/dto/board/comment/ReportCommentBoardRequestDto";
import UpdateAnonymCommentBoardRequestDto from "@/dto/board/comment/UpdateAnonymCommentBoardRequestDto";
import UpdateUserCommentBoardRequestDto from "@/dto/board/comment/UpdateUserCommentBoardRequestDto";
const { cookies } = useCookies();

export default {
    deleteAnonymCommentBoard: (data: DeleteAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/delete/anonym/comment', data, null);
    },
    deleteUserCommentBoard: (data: DeleteUserCommentBoardRequestDto) => {
        return post('/api/board/delete/user/comment', data, null);
    },
    enrollUserCommentBoard: (data: EnrollUserCommentBoardRequestDto) => {
        return post('/api/board/enroll/user/comment', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') });
    },
    enrollAnonymCommentBoard: (data: EnrollAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/enroll/anonym/comment', data, null)
    },
    findAnonymAllCommentBoard: (id: string) => {
        return get(`/api/public/board/find/anonym/all/comment/${id}`, {}, null);
    },
    findUserAllCommentBoard: (id: string) => {
        return get(`/api/board/find/user/all/comment/${id}`, {}, { Authorization: 'Bearer ' + cookies.get('lg.m.log') });
    },
    findAnonymParentCommentBoard: (data: FindAnonymParentCommentBoardRequestDto, id: string) => {
        return get(`/api/public/board/find/anonym/parent/comment/${id}`, data, null);
    },
    findUserParentCommentBoard: (data: FindUserParentCommentBoardRequestDto, id: string) => {
        return get(`/api/board/find/user/parent/comment/${id}`, data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') });
    },
    findAnonymChildrenCommentBoard: (data: FindAnonymChildrenCommentBoardRequestDto, id: string) => {
        return get(`/api/public/board/find/anonym/children/comment/${id}`, data, null);
    },
    findUserChildrenCommentBoard: (data: FindUserChildrenCommentBoardRequestDto, id: string) => {
        return get(`/api/board/find/user/children/comment/${id}`, data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') });
    },
    reportCommentBoard: (data: ReportCommentBoardRequestDto) => {
        return post('/api/public/board/report/comment', data, null);
    },
    updateAnonymCommentBoard: (data: UpdateAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/update/anonym/comment', data, null)
    },
    updateUserCommentBoard: (data: UpdateUserCommentBoardRequestDto) => {
        return post('/api/board/update/user/comment', data, { Authorization: 'Bearer ' + cookies.get('lg.m.log') });
    }
}