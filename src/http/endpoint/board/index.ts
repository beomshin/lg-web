
const END_POINT = {
    DELETE_ANONYM_BOARD: '/api/public/board/delete/anonym', // 익명 게시판 삭제
    DELETE_USER_BOARD: '/api/board/delete/user', // 회원 게시판 삭제
    LOGIN_ANONYM_BOARD: '/api/public/board/login/anonym', // 익명 게시판 로그인
    LOGIN_USER_BAORD: '/api/board/login/user', // 회원 게시판 로그인
    FIND_ALL_LIST_BOARD: '/api/public/board/find/all/list', // 포지션 게시판 전체 조회
    FIND_USER_LIST_BOARD: '/api/board/find/user/list', // 회원 포지션 게시판 조회
    FIND_ANONYM_DETAIL_BOARD: (id: string) => { return `/api/public/board/find/anonym/detail/${id}`}, // 게시판 상세 조회 (익명)
    FIND_USER_DETAIL_BOARD: (id: string) => { return `/api/board/find/user/detail/${id}` }, // 게시판 상세 조회 (화원)
    ENROLL_USER_BOARD: '/api/board/enroll/user', // 회원 포지션 게시판 등록
    ENROLL_ANONYM_BOARD: '/api/public/board/enroll/anonym', // 익명 포지션 게시판 등록
    ENROLL_LAW_FIRM_BOARD: '/api/board/enroll/lawfirm', // 로펌 포지션 게시판 등록
    RECOMMEND_BOARD: '/api/board/recommend', // 게시판 추천
    DELETE_RECOMMEND_BOARD: '/api/board/delete/recommend', // 게시판 추천 삭제
    REPORT_BOARD: '/api/public/board/report', // 게시판 신고
    UPDATE_USER_BOARD: '/api/board/update/user', // 회원 게시판 수정
    UPDATE_ANONYM_BOARD: '/api/public/board/update/anonym' // 익명 게시판 수정
}

export default END_POINT
