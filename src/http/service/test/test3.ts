import get from "@/http/get";
import post from "@/http/post";
import BoardLoginAnonym from "@/dto/etc/BoardLoginAnonym";
import BoardLoginMember from "@/dto/etc/BoardLoginMember";
import BoardFindList from "@/dto/etc/BoardFindList";
import BoardFindBoardAnonym from "@/dto/etc/BoardFindBoardAnonym";
import BoardEnrollAnonym from "@/dto/etc/BoardEnrollAnonym";
import BoardEnrollMember from "@/dto/etc/BoardEnrollMember";
import BoardUpdate from "@/dto/etc/BoardUpdate";
import BoardDelete from "@/dto/etc/BoardDelete";
import BoardReport from "@/dto/etc/BoardReport";
import BoardRecommend from "@/dto/etc/BoardRecommend";
import BoardFindCommentAnonym from "@/dto/etc/BoardFindCommentAnonym";
import BoardEnrollCommentMember from "@/dto/etc/BoardEnrollCommentMember";
import BoardEnrollCommentAnonym from "@/dto/etc/BoardEnrollCommentAnonym";
import BoardUpdateComment from "@/dto/etc/BoardUpdateComment";
import BoardDeleteComment from "@/dto/etc/BoardDeleteComment";
import BoardFindBoardMember from "@/dto/etc/BoardFindBoardMember";
import BoardFindCommentMember from "@/dto/etc/BoardFindCommentMember";
import BoardFindMemberList from "@/dto/etc/BoardFindMemberList";

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
    BoardFindMemberList: (data: BoardFindMemberList, headers: any, subUrl: string) => {
        return get('/be/board/pq/find/member/list', data, headers);
    }
}
