import get from '@/http/get'
import post from '@/http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/http/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import DeleteCommentTrialRequestDto from "@/dto/trial/comment/DeleteCommentTrialRequestDto";
import EnrollCommentTrialRequestDto from "@/dto/trial/comment/EnrollCommentTrialRequestDto";
import FindAnonymParentCommentTrialRequestDto from "@/dto/trial/comment/FindAnonymParentCommentTrialRequestDto";
import FindUserParentCommentTrialRequestDto from "@/dto/trial/comment/FindUserParentCommentTrialRequestDto";
import FindAnonymChildrenCommentTrialRequestDto from "@/dto/trial/comment/FindAnonymChildrenCommentTrialRequestDto";
import FindUserChildrenCommentTrialRequestDto from "@/dto/trial/comment/FindUserChildrenCommentTrialRequestDto";
import ReportCommentTrialRequestDto from "@/dto/trial/comment/ReportCommentTrialRequestDto";
import UpdateCommentTrialRequestDto from "@/dto/trial/comment/UpdateCommentTrialRequestDto";


export default  {
    deleteCommentTrial: (data: DeleteCommentTrialRequestDto) => { // 트라이얼 댓글 삭제 (회원)
        return post(EndPoint.DELETE_COMMENT_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    enrollCommentTrial: (data: EnrollCommentTrialRequestDto) => { // 트라이얼 댓글 등록 (회원)
        return post(EndPoint.ENROLL_COMMENT_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    findAnonymAllCommentTrial: (params: any) => { // 트라이얼 게시판 댓글 전체 조회(익명)
        return get(EndPoint.FIND_ANONYM_ALL_COMMENT_TRIAL(params.id), ParamsUtils.EMPTY, HeaderUtils.NORMAL)
    },
    findUserAllCommentTrial: (params: any) => { // 트라이얼 게시판 댓글 전체 조회(회원)
        return get(EndPoint.FIND_USER_ALL_COMMENT_TRIAL(params.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    findAnonymParentCommentTrial: (params: FindAnonymParentCommentTrialRequestDto) => { // 트라이얼 게시판 부모 댓글 조회(익명)
        return get(EndPoint.FIND_ANONYM_PARENT_COMMENT_TRIAL(params.id), params, HeaderUtils.NORMAL)
    },
    findUserParentCommentTrial: (params: FindUserParentCommentTrialRequestDto) => { // 트라이얼 게시판 부모 댓글 조회(회원)
        return get(EndPoint.FIND_USER_PARENT_COMMENT_TRIAL(params.id), params, HeaderUtils.AUTH_HEADER)
    },
    findAnonymChildrenCommentTrial: (params: FindAnonymChildrenCommentTrialRequestDto) => { // 트라이얼 게시판 자식 댓글 조회(익명)
        return get(EndPoint.FIND_ANONYM_CHILDRENT_COMMENT_TRIAL(params.id), params, HeaderUtils.NORMAL)
    },
    findUserChildrenCommentTrial: (params: FindUserChildrenCommentTrialRequestDto) => { // 트라이얼 게시판 자식 댓글 조회(회원)
        return get(EndPoint.FIND_USER_CHILDRENT_COMMENT_TRIAL(params.id), params, HeaderUtils.AUTH_HEADER)
    },
    reportCommentTrial: (data: ReportCommentTrialRequestDto) => { // 트라이얼 댓글 신고
        return post(EndPoint.REPORT_COMMENT_TRIAL, data, HeaderUtils.AUTH_HEADER)
    },
    updateCommentTrial: (data: UpdateCommentTrialRequestDto) => { // 트라이얼 댓글 수정
        return post(EndPoint.UPDATE_COMMENT_TRIAL, data, HeaderUtils.AUTH_HEADER)
    }

}
