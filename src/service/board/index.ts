import get from "@/http/get";
import post from "@/http/post";
import BoardLoginAnonym from "@/dto/board/BoardLoginAnonym";
import BoardLoginMember from "@/dto/board/BoardLoginMember";
import BoardLoginLawFirm from "@/dto/board/BoardLoginLawFirm";
import BoardFindList from "@/dto/board/BoardFindList";
import BoardFindBoardAnonym from "@/dto/board/BoardFindBoardAnonym";
import BoardEnrollAnonym from "@/dto/board/BoardEnrollAnonym";
import BoardEnrollMember from "@/dto/board/BoardEnrollMember";
import BoardUpdate from "@/dto/board/BoardUpdate";
import BoardDelete from "@/dto/board/BoardDelete";
import BoardReport from "@/dto/board/BoardReport";
import BoardRecommend from "@/dto/board/BoardRecommend";
import BoardFindComment from "@/dto/board/BoardFindComment";
import BoardEnrollCommentMember from "@/dto/board/BoardEnrollCommentMember";
import BoardEnrollCommentAnonym from "@/dto/board/BoardEnrollCommentAnonym";
import BoardUpdateComment from "@/dto/board/BoardUpdateComment";
import BoardDeleteComment from "@/dto/board/BoardDeleteComment";
import BoardFindBoardMember from "@/dto/board/BoardFindBoardMember";

export default {
    BoardLoginAnonym: (data: BoardLoginAnonym, headers: any, subUrl: string) => {
        return post('/be/board/login/anonym', data, headers);
    },
    BoardLoginMember: (data: BoardLoginMember, headers: any, subUrl: string) => {
        return post('/be/board/login/member', data, headers);
    },
    BoardLoginLawFirm: (data: BoardLoginLawFirm, headers: any, subUrl: string) => {
        return post('/be/board/login/lawfirm', data, headers);
    },
    BoardFindList: (data: BoardFindList, headers: any, subUrl: string) => {
        return get('/be/board/find/boards', data, headers);
    },
    BoardFindBoardAnonym: (data: BoardFindBoardAnonym, headers: any, subUrl: string) => {
        return get(`/be/board/find/board/anonym/${subUrl}`, data, headers);
    },
    BoardFindBoardMember: (data: BoardFindBoardMember, headers: any, subUrl: string) => {
        return get(`/be/board/pq/find/board/member/${subUrl}`, data, headers);
    },
    BoardEnrollAnonym: (data: BoardEnrollAnonym, headers: any, subUrl: string) => {
        return post('/be/board/enroll/anonym', data, headers);
    },
    BoardEnrollMember: (data: BoardEnrollMember, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/member', data, headers)
    },
    BoardUpdate: (data: BoardUpdate, headers: any, subUrl: string) => {
        return post('/be/board/update', data, headers);
    },
    BoardDelete: (data: BoardDelete, headers: any, subUrl: string) => {
        return post('/be/board/delete', data, headers);
    },
    BoardReport: (data: BoardReport, headers: any, subUrl: string) => {
        return post('/be/board/report', data, headers);
    },
    BoardRecommend: (data: BoardRecommend, headers: any, subUrl: string) => {
        return post('/be/board/pq/recommend', data, headers);
    },
    BoardFindComment: (data: BoardFindComment, headers: any, subUrl: string) => {
        return get(`/be/board/find/comment/${subUrl}`, data, headers);
    },
    BoardEnrollCommentMember: (data: BoardEnrollCommentMember, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/comment/member', data, headers);
    },
    BoardEnrollCommentAnonym: (data: BoardEnrollCommentAnonym, headers: any, subUrl: string) => {
        return post('/be/board/enroll/comment/anonym', data, headers);
    },
    BoardUpdateComment: (data: BoardUpdateComment, headers: any, subUrl: string) => {
        return post('/be/board/update/comment', data, headers);
    },
    BoardDeleteComment: (data: BoardDeleteComment, headers: any, subUrl: string) => {
        return post('/be/board/delete/comment', data, headers);
    },
}
