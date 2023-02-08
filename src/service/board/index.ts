import get from "@/http/get";
import post from "@/http/post";
import BoardLoginAnonym from "@/dto/board/BoardLoginAnonym";
import BoardLoginMember from "@/dto/board/BoardLoginMember";
import BoardLoginLawFirm from "@/dto/board/BoardLoginLawFirm";
import BoardFindList from "@/dto/board/BoardFindList";
import BoardFindBoard from "@/dto/board/BoardFindBoard";
import BoardEnrollAnonym from "@/dto/board/BoardEnrollAnonym";
import BoardEnrollMember from "@/dto/board/BoardEnrollMember";
import BoardUpdate from "@/dto/board/BoardUpdate";
import BoardDelete from "@/dto/board/BoardDelete";
import BoardReport from "@/dto/board/BoardReport";
import BoardRecommend from "@/dto/board/BoardRecommend";
import BoardCommentFind from "@/dto/board/BoardCommentFind";
import BoardCommentEnrollMember from "@/dto/board/BoardCommentEnrollMember";
import BoardCommentEnrollAnonym from "@/dto/board/BoardCommentEnrollAnonym";
import BoardCommentUpdate from "@/dto/board/BoardCommentUpdate";
import BoardCommentDelete from "@/dto/board/BoardCommentDelete";

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
    BoardFindBoard: (data: BoardFindBoard, headers: any, subUrl: string) => {
        return get(`/be/board/find/board/${subUrl}`, data, headers);
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
    BoardCommentFind: (data: BoardCommentFind, headers: any, subUrl: string) => {
        return get(`/be/board/find/board/comment/${subUrl}`, data, headers);
    },
    BoardCommentEnrollMember: (data: BoardCommentEnrollMember, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/comment/member', data, headers);
    },
    BoardCommentEnrollAnonym: (data: BoardCommentEnrollAnonym, headers: any, subUrl: string) => {
        return post('/be/board/enroll/comment/anonym', data, headers);
    },
    BoardCommentUpdate: (data: BoardCommentUpdate, headers: any, subUrl: string) => {
        return post('/be/board/comment/update', data, headers);
    },
    BoardCommentDelete: (data: BoardCommentDelete, headers: any, subUrl: string) => {
        return post('/be/board/comment/delete', data, headers);
    },
}
