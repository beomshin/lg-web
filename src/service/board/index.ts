import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/http/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
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
import FindAnonymDetailBoard from "@/dto/board/FindAnonymDetailBoard";
import findUserDetailBoard from "@/dto/board/comment/FindUserDetailBoard";

export default {
    deleteAnonymBoard: (data: DeleteAnonymBoardRequestDto) => { // 익명 게시판 삭제
        return post(EndPoint.DELETE_ANONYM_BOARD, data, HeaderUtils.NORMAL)
    },
    deleteUserBoard: (data: DeleteUserBoardRequestDto) => { // 회원 게시판 삭제
        return post(EndPoint.DELETE_USER_BOARD, data, HeaderUtils.AUTH_HEADER)
    },
    loginAnonymBoard: (data: LoginAnonymBoardRequestDto) => { // 익명 게시판 로그인
        return post(EndPoint.LOGIN_ANONYM_BOARD, data, HeaderUtils.NORMAL);
    },
    loginUserBoard: (data: LoginUserBoardRequestDto) => { // 회원 게시판 로그인
        return post(EndPoint.LOGIN_USER_BAORD, data, HeaderUtils.AUTH_HEADER)
    },
    findAllListBoard: (params: FindAllListBoardRequestDto) => { // 포지션 게시판 전체 조회
        return get(EndPoint.FIND_ALL_LIST_BOARD, params, HeaderUtils.NORMAL)
    },
    findUserListBoard: (params: FindUserListBoardRequestDto) => { // 회원 포지션 게시판 조회
        return get(EndPoint.FIND_USER_LIST_BOARD, params, HeaderUtils.AUTH_HEADER)
    },
    findAnonymDetailBoard: (params: FindAnonymDetailBoard) => { // 게시판 상세 조회 (익명)
        return get(EndPoint.FIND_ANONYM_DETAIL_BOARD(params.id), ParamsUtils.EMPTY, HeaderUtils.NORMAL)
    },
    findUserDetailBoard: (params: findUserDetailBoard) => { // 게시판 상세 조회 (화원)
        return get(EndPoint.FIND_USER_DETAIL_BOARD(params.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    enrollUserBoard: (data: EnrollUserBoardRequestDto) => { // 회원 포지션 게시판 등록
        return post(EndPoint.ENROLL_USER_BOARD, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    enrollAnonymBoard: (data: EnrollAnonymBoardRequestDto) => { // 익명 포지션 게시판 등록
        return post(EndPoint.ENROLL_ANONYM_BOARD, data, HeaderUtils.MULTIPART_HEADER)
    },
    enrollLawFirmBoard: (data: EnrollLawFirmBoardRequestDto) => { // 로펌 포지션 게시판 등록
        return post(EndPoint.ENROLL_LAW_FIRM_BOARD, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    recommendBoard: (data: RecommendBoardRequestDto) => { // 게시판 추천
        return post(EndPoint.RECOMMEND_BOARD, data, HeaderUtils.AUTH_HEADER)
    },
    deleteRecommendBoard: (data: DeleteRecommendBoardRequestDto) => { // 게시판 추천 삭제
        return post(EndPoint.DELETE_RECOMMEND_BOARD, data, HeaderUtils.AUTH_HEADER)
    },
    reportBoard: (data: ReportBoardRequestDto) => { // 게시판 신고
        return post(EndPoint.REPORT_BOARD, data, HeaderUtils.NORMAL)
    },
    updateUserBoard: (data: UpdateUserBoardRequestDto) => { // 회원 게시판 수정
        return post(EndPoint.UPDATE_USER_BOARD, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    updateAnonymBoard: (data: UpdateAnonymBoardRequestDto) => { // 익명 게시판 수정
        return post(EndPoint.UPDATE_ANONYM_BOARD, data, HeaderUtils.MULTIPART_HEADER)
    }
}
