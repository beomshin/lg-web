import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import LoginUserTrialRequestDto from "@/dto/trial/LoginUserTrialRequestDto";
import DeleteUserTrialRequestDto from "@/dto/trial/DeleteUserTrialRequestDto";
import EnrollUserTrialRequestDto from "@/dto/trial/EnrollUserTrialRequestDto";
import EnrollLawFirmTrialRequestDto from "@/dto/trial/EnrollLawFirmTrialRequestDto";
import FindAllListTrialRequestDto from "@/dto/trial/FindAllListTrialRequestDto";
import FindUserListTrialRequestDto from "@/dto/trial/FindUserListTrialRequestDto";
import RecommendTrialRequestDto from "@/dto/trial/RecommendTrialRequestDto";
import DeleteRecommendTrialRequestDto from "@/dto/trial/DeleteRecommendTrialRequestDto";
import ReportTrialRequestDto from "@/dto/trial/ReportTrialRequestDto";
import VoteTrialRequestDto from "@/dto/trial/VoteTrialRequestDto";
import UpdateTrialRequestDto from "@/dto/trial/UpdateTrialRequestDto";
import FindAnonymDetailTrialRequestDto from "@/dto/trial/FindAnonymDetailTrialRequestDto";
import FindUserDetailTrialRequestDto from "@/dto/trial/FindUserDetailTrialRequestDto";

export default {
    loginUserTrial: (data: LoginUserTrialRequestDto) => { // 트라이얼 로그인 (회원)
        return post(EndPoint.LOGIN_USER_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    deleteUserTrial: (data: DeleteUserTrialRequestDto) => { // 트라이얼 게시판 삭제(회원)
        return post(EndPoint.DELETE_USER_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    enrollUserTrial: (data: EnrollUserTrialRequestDto) => { // 회원 트라이얼 등록
        return post(EndPoint.ENROLL_USER_TRIAL, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    enrollLawFirmTrial: (data: EnrollLawFirmTrialRequestDto) => { // 로펌 트라이얼 등록
        return post(EndPoint.ENROLL_LAW_FIRM_TRIAL, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    },
    findAllListTrial: (params: FindAllListTrialRequestDto) => { // 트라이얼 게시판 전체 조회
        return get(EndPoint.FIND_ALL_LIST_TRIAL, params, HeaderUtils.NORMAL)
    },
    findUserListTrial: (params: FindUserListTrialRequestDto) => { // 회원 트라이얼 게시판 조회
        return get(EndPoint.FIND_USER_LIST_TRIAL, params, HeaderUtils.AUTH_HEADER)
    },
    findAnonymDetailTrial: (params: FindAnonymDetailTrialRequestDto) => { // 트라이얼 게시판 상세 조회(익명)
        return get(EndPoint.FIND_ANONYM_DETAIL_TRIAL(params.id), ParamsUtils.EMPTY, HeaderUtils.NORMAL)
    },
    findUserDetailTrial: (params: FindUserDetailTrialRequestDto) => { // 트라이얼 게시판 상세 조회(화원)
        return get(EndPoint.FIND_USER_DETAIL_TRIAL(params.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    recommendTrial: (data: RecommendTrialRequestDto) => { // 트라이얼 게시판 추천
        return post(EndPoint.RECOMMEND_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    deleteRecommendTrial: (data: DeleteRecommendTrialRequestDto) => { // 트라이얼 추천 삭제
        return post(EndPoint.DELETE_RECOMMEND_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    reportTrial: (data: ReportTrialRequestDto) => { // 트라이얼 신고
        return post(EndPoint.REPORT_TRIAL, data, HeaderUtils.NORMAL)
    },
    voteTrial: (data: VoteTrialRequestDto) => { // 트라이얼 투표
        return post(EndPoint.VOTE_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    updateTrial: (data: UpdateTrialRequestDto) => { // 트라이얼 수정
        return post(EndPoint.UPDATE_TRIAL, data, HeaderUtils.AUTH_MULTIPART_HEADER)
    }

}
