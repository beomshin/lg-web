
const END_POINT = {
    APPLY_LAW_FIRM: '/api/law-firm/apply', // 로펌 신청하기
    CONFIRM_LAW_FIRM: '/api/law-firm/confirm', // 로펌 신청 접수하기
    ENROLL_LAW_FIRM: '/api/law-firm/enroll', // 로펌 만들기
    DELETE_LAW_FIRM: '/api/law-firm/delete', // 로펌 삭제하기
    QUIT_LAW_FIRM: '/api/law-firm/quit', // 로펌 탈퇴하기
    USER_DELETE_LAW_FIRM: '/api/law-firm/user/delete', // 로펌 회원 탈퇴시키기
    FIND_ALL_LAW_FIRM_LIST: '/api/public/law-firm/list', // 로펌 리스트 조회하기
    FIND_LAW_FIRM_DETAIL: (id: string) => { return `/api/public/law-firm/${id}` }, // 로펌 상세 조회하기
    FIND_MY_LAW_FIRM: '/api/law-firm/find/my',  // 내 로펌 정보 조회
    FIND_APPLY_LIST_MY_LAW_FIRM: '/api/law-firm/find/apply/list/my', // 로펌 지원자 리스트 조회하기
    FIND_USER_LIST_MY_LAW_FIRM: '/api/law-firm/find/user/list/my', // 로펌 유저 리스트 조회하기
    ACTIVE_LAW_FIRM: '/api/law-firm/active', // 로펌 활성화&비활성화 하기
    UPDATE_LAW_FIRM: '/api/law-firm/update' // 로펌 수정하기
}

export default END_POINT
