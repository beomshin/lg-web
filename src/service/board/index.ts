import get from "../../http/get";
import post from "../../http/post";
import FindBoards from "../../dto/board/FindBoards";
import EnrollUserBoard from "../../dto/board/EnrollUserBoard";
import EnrollAnonymBoard from "../../dto/board/EnrollAnonymBoard";
import LoginBoard from "../../dto/member/LoginBoard";
import DeleteBoard from "../../dto/member/DeleteBoard";
import UpdateBoard from "../../dto/member/UpdateBoard";
import RecommendBoard from "../../dto/member/RecommendBoard";
import EnrollBoardMemberComment from "../../dto/member/EnrollBoardAnonymComment";
import DeleteComment from "../../dto/member/DeleteComment";
import EnrollBoardAnonymComment from "../../dto/member/EnrollBoardAnonymComment";
import UpdateComment from "../../dto/member/UpdateComment";
import ReportBoard from "../../dto/member/ReportBoard";

export default {
    BoardLoginAnonym: (data: LoginBoard, headers: any, subUrl: string) => {
        return post('/be/board/login/anonym', data, headers);
    },
    BoardLoginMember: (data: LoginBoard, headers: any, subUrl: string) => {
        return post('/be/board/login/member', data, headers);
    },
    BoardLoginLawFirm: (data: LoginBoard, headers: any, subUrl: string) => {
        return post('/be/board/login/lawfirm', data, headers);
    },
    BoardFindList: (data: FindBoards, headers: any, subUrl: string) => {
        return get('/be/board/find/boards', data, headers);
    },
    BoardFindBoard: (data: any, headers: any, subUrl: string) => {
        return get(`/be/board/find/board/${subUrl}`, data, headers);
    },
    BoardEnrollAnonym: (data: EnrollAnonymBoard, headers: any, subUrl: string) => {
        return post('/be/board/enroll/anonym', data, headers);
    },
    BoardEnrollMember: (data: EnrollUserBoard, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/member', data, headers)
    },
    BoardUpdate: (data: UpdateBoard, headers: any, subUrl: string) => {
        return post('/be/board/update', data, headers);
    },
    BoardDelete: (data: DeleteBoard, headers: any, subUrl: string) => {
        return post('/be/board/delete', data, headers);
    },
    BoardReport: (data: ReportBoard, headers: any, subUrl: string) => {
        return post('/be/board/report', data, headers);
    },
    BoardRecommend: (data: RecommendBoard, headers: any, subUrl: string) => {
        return post('/be/board/pq/recommend', data, headers);
    },
    BoardCommentFind: (data: any, headers: any, subUrl: string) => {
        return get(`/be/board/find/board/comment/${subUrl}`, data, headers);
    },
    BoardCommentEnrollMember: (data: EnrollBoardMemberComment, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/comment/member', data, headers);
    },
    BoardCommentEnrollAnonym: (data: EnrollBoardAnonymComment, headers: any, subUrl: string) => {
        return post('/be/board/enroll/comment/anonym', data, headers);
    },
    BoardCommentUpdate: (data: UpdateComment, headers: any, subUrl: string) => {
        return post('/be/board/comment/update', data, headers);
    },
    BoardCommentDelete: (data: DeleteComment, headers: any, subUrl: string) => {
        return post('/be/board/comment/delete', data, headers);
    },
}
