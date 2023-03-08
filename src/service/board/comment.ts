import get from '@/http/get'
import post from '@/http/post'
import HeaderUtils from "@/http/headerUtils";
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

export default {
    deleteAnonymCommentBoard: (data: DeleteAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/delete/anonym/comment', data, HeaderUtils.NORMAL);
    },
    deleteUserCommentBoard: (data: DeleteUserCommentBoardRequestDto) => {
        return post('/api/board/delete/user/comment', data, HeaderUtils.NORMAL);
    },
    enrollUserCommentBoard: (data: EnrollUserCommentBoardRequestDto) => {
        return post('/api/board/enroll/user/comment', data, HeaderUtils.AUTH_HEADER);
    },
    enrollAnonymCommentBoard: (data: EnrollAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/enroll/anonym/comment', data, HeaderUtils.NORMAL)
    },
    findAnonymAllCommentBoard: (id: string) => {
        return get(`/api/public/board/find/anonym/all/comment/${id}`, {}, HeaderUtils.NORMAL);
    },
    findUserAllCommentBoard: (id: string) => {
        return get(`/api/board/find/user/all/comment/${id}`, {}, HeaderUtils.AUTH_HEADER);
    },
    findAnonymParentCommentBoard: (data: FindAnonymParentCommentBoardRequestDto, id: string) => {
        return get(`/api/public/board/find/anonym/parent/comment/${id}`, data, HeaderUtils.NORMAL);
    },
    findUserParentCommentBoard: (data: FindUserParentCommentBoardRequestDto, id: string) => {
        return get(`/api/board/find/user/parent/comment/${id}`, data, HeaderUtils.AUTH_HEADER);
    },
    findAnonymChildrenCommentBoard: (data: FindAnonymChildrenCommentBoardRequestDto, id: string) => {
        return get(`/api/public/board/find/anonym/children/comment/${id}`, data, HeaderUtils.NORMAL);
    },
    findUserChildrenCommentBoard: (data: FindUserChildrenCommentBoardRequestDto, id: string) => {
        return get(`/api/board/find/user/children/comment/${id}`, data, HeaderUtils.AUTH_HEADER);
    },
    reportCommentBoard: (data: ReportCommentBoardRequestDto) => {
        return post('/api/public/board/report/comment', data, HeaderUtils.NORMAL);
    },
    updateAnonymCommentBoard: (data: UpdateAnonymCommentBoardRequestDto) => {
        return post('/api/public/board/update/anonym/comment', data, HeaderUtils.NORMAL)
    },
    updateUserCommentBoard: (data: UpdateUserCommentBoardRequestDto) => {
        return post('/api/board/update/user/comment', data, HeaderUtils.AUTH_HEADER);
    }
}
