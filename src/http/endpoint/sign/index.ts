
const END_POINT = {
    CHECK_ID_SIGN: '/api/public/check/id/sign',
    SEND_EMAIL_SIGN: '/api/public/send/email/sign',
    VERIFY_EMAIL_SIGN: (txId: string) => { return `/api/public/verify/email/sign/${txId}` },
    USER_SIGN: '/api/public/user/sign'
}

export default END_POINT
