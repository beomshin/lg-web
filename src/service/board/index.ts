import get from "@/http/get";
import post from "@/http/post";
import BoardLoginAnonym from "@/dto/board/BoardLoginAnonym";
import BoardLoginMember from "@/dto/board/BoardLoginMember";
import BoardFindList from "@/dto/board/BoardFindList";
import BoardFindBoardAnonym from "@/dto/board/BoardFindBoardAnonym";
import BoardEnrollAnonym from "@/dto/board/BoardEnrollAnonym";
import BoardEnrollMember from "@/dto/board/BoardEnrollMember";
import BoardUpdate from "@/dto/board/BoardUpdate";
import BoardDelete from "@/dto/board/BoardDelete";
import BoardReport from "@/dto/board/BoardReport";
import BoardRecommend from "@/dto/board/BoardRecommend";
import BoardFindCommentAnonym from "@/dto/board/BoardFindCommentAnonym";
import BoardEnrollCommentMember from "@/dto/board/BoardEnrollCommentMember";
import BoardEnrollCommentAnonym from "@/dto/board/BoardEnrollCommentAnonym";
import BoardUpdateComment from "@/dto/board/BoardUpdateComment";
import BoardDeleteComment from "@/dto/board/BoardDeleteComment";
import BoardFindBoardMember from "@/dto/board/BoardFindBoardMember";
import BoardFindCommentMember from "@/dto/board/BoardFindCommentMember";

export default {
    BoardLoginAnonym: (data: BoardLoginAnonym, headers: any, subUrl: string) => {
        return post('/be/board/login/anonym', data, headers);
    },
    BoardLoginMember: (data: BoardLoginMember, headers: any, subUrl: string) => {
        return post('/be/board/login/member', data, headers);
    },
    BoardFindList: (data: BoardFindList, headers: any, subUrl: string) => {
        return get('/be/board/find/list', data, headers);
    },
    BoardFindBoardAnonym: (data: BoardFindBoardAnonym, headers: any, subUrl: string) => {
        return get(`/be/board/find/anonym/${subUrl}`, data, headers);
    },
    BoardFindBoardMember: (data: BoardFindBoardMember, headers: any, subUrl: string) => {
        return get(`/be/board/pq/find/member/${subUrl}`, data, headers);
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
    BoardFindCommentAnonym: (data: BoardFindCommentAnonym, headers: any, subUrl: string) => {
        return get(`/be/board/find/comment/anonym/${subUrl}`, data, headers);
    },
    BoardFindCommentMember: (data: BoardFindCommentMember, headers: any, subUrl: string) => {
        return get(`/be/board/pq/find/comment/member/${subUrl}`, data, headers);
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
