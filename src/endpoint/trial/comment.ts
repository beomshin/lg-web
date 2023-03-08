
const END_POINT = {
    DELETE_COMMENT_TRIAL: '/api/trial/delete/comment', // 트라이얼 댓글 삭제 (회원)
    ENROLL_COMMENT_TRIAL: '/api/trial/enroll/comment', // 트라이얼 댓글 등록 (회원)
    FIND_ANONYM_ALL_COMMENT_TRIAL: (id: string) => { return `/api/public/trial/find/anonym/all/comment/${id}` }, // 트라이얼 게시판 댓글 전체 조회(익명)
    FIND_USER_ALL_COMMENT_TRIAL: (id: string) => { return `/api/trial/find/user/all/comment/${id}` }, // 트라이얼 게시판 댓글 전체 조회(회원)
    FIND_ANONYM_PARENT_COMMENT_TRIAL: (id: string) => { return `/api/public/trial/find/anonym/parent/comment/${id}` }, // 트라이얼 게시판 부모 댓글 조회(익명)
    FIND_USER_PARENT_COMMENT_TRIAL: (id: string) => { return `/api/trial/find/user/parent/comment/${id}` }, // 트라이얼 게시판 부모 댓글 조회(회원)
    FIND_ANONYM_CHILDRENT_COMMENT_TRIAL: (id: string) => { return `/api/public/trial/find/anonym/children/comment/${id}` }, // 트라이얼 게시판 자식 댓글 조회(익명)
    FIND_USER_CHILDRENT_COMMENT_TRIAL: (id: string) => { return `/api/trial/find/user/children/comment/${id}` }, // 트라이얼 게시판 자식 댓글 조회(회원)
    REPORT_COMMENT_TRIAL: '/api/trial/report/comment', // 트라이얼 댓글 신고
    UPDATE_COMMENT_TRIAL: '/api/trial/update/comment' // 트라이얼 댓글 수정
}

export default END_POINT
