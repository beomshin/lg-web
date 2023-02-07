import get from "@/http/get";
import post from "@/http/post";
import FindBoards from "@/dto/board/FindBoards";
import EnrollUserBoard from "@/dto/board/EnrollUserBoard";
import EnrollAnonymBoard from "@/dto/board/EnrollAnonymBoard";
import LoginBoard from "@/dto/member/LoginBoard";
import DeleteBoard from "@/dto/member/DeleteBoard";
import UpdateBoard from "@/dto/member/UpdateBoard";
import RecommendBoard from "@/dto/member/RecommendBoard";
import EnrollBoardMemberComment from "@/dto/member/EnrollBoardAnonymComment";
import DeleteComment from "@/dto/member/DeleteComment";
import EnrollBoardAnonymComment from "@/dto/member/EnrollBoardAnonymComment";

export default {
    findBoards: (data: FindBoards) => {
        return get('/be/board/find/boards', data);
    },
    enrollAnonym: (data: EnrollAnonymBoard, headers: any) => {
        return post('/be/board/enroll/anonym', data, headers);
    },
    enrollMember: (data: EnrollUserBoard, headers: any) => {
        return post('/be/board/pq/enroll/member', data, headers)
    },
    findBoard: (url: any, boardId: number, data: any) => {
        return get(`${url}/${boardId}`, data);
    },
    loginAnonymBoard: (data: LoginBoard, headers: any) => {
        return post('/be/board/login/anonym', data, headers);
    },
    loginMemberBoard: (data: LoginBoard, headers: any) => {
        return post('/be/board/login/member', data, headers);
    },
    loginLawFirmBoard: (data: LoginBoard, headers: any) => {
        return post('/be/board/login/lawfirm', data, headers);
    },
    deleteBoard: (data: DeleteBoard, headers: any) => {
        return post('/be/board/delete', data, headers);
    },
    updateBoard: (data: UpdateBoard, headers: any) => {
        return post('/be/board/update', data, headers);
    },
    recommendBoard: (data: RecommendBoard, headers: any) => {
        return post('/be/board/pq/recommend', data, headers);
    },
    enrollMemberComment: (data: EnrollBoardMemberComment, headers: any) => {
        return post('/be/board/pq/enroll/comment/member', data, headers);
    },
    enrollAnonymComment: (data: EnrollBoardAnonymComment, headers: any) => {
        return post('/be/board/enroll/comment/anonym', data, headers);
    },
    findComments: (url: any, boardId: number, data: any) => {
        return get(`${url}/${boardId}`, data);
    },
    deleteComment: (data: DeleteComment, headers: any) =>  {
        return post('/be/board/comment/delete', data, headers);
    }
}
