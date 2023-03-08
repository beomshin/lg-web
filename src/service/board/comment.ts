import get from '@/http/get'
import post from '@/http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/http/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
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
    deleteAnonymCommentBoard: (data: DeleteAnonymCommentBoardRequestDto) => { // 익명 게시판 댓글 삭제
        return post(EndPoint.DELETE_ANONYM_COMMENT_BOARD, data, HeaderUtils.NORMAL);
    },
    deleteUserCommentBoard: (data: DeleteUserCommentBoardRequestDto) => { // 회원 게시판 댓글 삭제
        return post(EndPoint.DELETE_USER_COMMENT_BOARD, data, HeaderUtils.NORMAL);
    },
    enrollUserCommentBoard: (data: EnrollUserCommentBoardRequestDto) => { // 회원 게시판 댓글 등록
        return post(EndPoint.ENROLL_USER_COMMENT_BOARD, data, HeaderUtils.AUTH_HEADER);
    },
    enrollAnonymCommentBoard: (data: EnrollAnonymCommentBoardRequestDto) => { // 익명 게시판 댓글 등록
        return post(EndPoint.ENROLL_ANONYM_COMMENT_BOARD, data, HeaderUtils.NORMAL)
    },
    findAnonymAllCommentBoard: (id: string) => { // 게시판 댓글 전체 조회(익명)
        return get(EndPoint.FIND_ANONYM_ALL_COMMENT_BOARD(id), ParamsUtils.EMPTY, HeaderUtils.NORMAL);
    },
    findUserAllCommentBoard: (id: string) => { // 게시판 댓글 전체 조회(회원)
        return get(EndPoint.FIND_USER_ALL_COMMENT_BOARD(id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER);
    },
    findAnonymParentCommentBoard: (data: FindAnonymParentCommentBoardRequestDto) => { // 게시판 부모 댓글 조회(익명)
        return get(EndPoint.FIND_ANONYM_PARENT_COMMENT_BOARD(data.id), data, HeaderUtils.NORMAL);
    },
    findUserParentCommentBoard: (data: FindUserParentCommentBoardRequestDto) => { // 게시판 부모 댓글 조회(회원)
        return get(EndPoint.FIND_USER_PARENT_COMMENT_BOARD(data.id), data, HeaderUtils.AUTH_HEADER);
    },
    findAnonymChildrenCommentBoard: (data: FindAnonymChildrenCommentBoardRequestDto) => { // 게시판 자식 댓글 조회(익명)
        return get(EndPoint.FIND_ANONYM_CHILDREN_COMMENT_BOARD(data.id), data, HeaderUtils.NORMAL);
    },
    findUserChildrenCommentBoard: (data: FindUserChildrenCommentBoardRequestDto) => { // 게시판 자식 댓글 조회(회원)
        return get(EndPoint.FIND_USER_CHILDREN_COMMENT_BOARD(data.id), data, HeaderUtils.AUTH_HEADER);
    },
    reportCommentBoard: (data: ReportCommentBoardRequestDto) => { // 게시판 댓글 신고
        return post(EndPoint.REPORT_COMMENT_BOARD, data, HeaderUtils.NORMAL);
    },
    updateAnonymCommentBoard: (data: UpdateAnonymCommentBoardRequestDto) => { // 익명 게시판 댓글 수정
        return post(EndPoint.UPDATE_ANONYM_COMMENT_BOARD, data, HeaderUtils.NORMAL)
    },
    updateUserCommentBoard: (data: UpdateUserCommentBoardRequestDto) => { // 회원 게시판 댓글 수정
        return post(EndPoint.UPDATE_USER_COMMENT_BOARD, data, HeaderUtils.AUTH_HEADER);
    }
}
