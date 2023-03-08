
const END_POINT = {
    LOGIN_USER_TRIAL: '/api/trial/login/user', // 트라이얼 로그인 (회원)
    DELETE_USER_TRIAL: '/api/trial/delete/user', // 트라이얼 게시판 삭제(회원)
    ENROLL_USER_TRIAL: '/api/trial/enroll/user', // 회원 트라이얼 등록
    ENROLL_LAW_FIRM_TRIAL: '/api/trial/enroll/lawfirm', // 로펌 트라이얼 등록
    FIND_ALL_LIST_TRIAL: '/api/public/trial/find/all/list', // 트라이얼 게시판 전체 조회
    FIND_USER_LIST_TRIAL: '/api/public/trial/find/user/list', // 회원 트라이얼 게시판 조회
    FIND_ANONYM_DETAIL_TRIAL: (id: string) => { return `/api/public/trial/find/anonym/detail/${id}` },  // 트라이얼 게시판 상세 조회(익명)
    FIND_USER_DETAIL_TRIAL: (id: string) => { return `/api/trial/find/user/detail/${id}` }, // 트라이얼 게시판 상세 조회(화원)
    RECOMMEND_TRIAL: '/api/trial/recommend', // 트라이얼 게시판 추천
    DELETE_RECOMMEND_TRIAL: '/api/trial/recommend/delete', // 트라이얼 추천 삭제
    REPORT_TRIAL: '/api/public/trial/report', // 트라이얼 신고
    VOTE_TRIAL: '/api/trial/vote', // 트라이얼 투표
    UPDATE_TRIAL: '/api/trial/update',  // 트라이얼 수정
}

export default END_POINT
