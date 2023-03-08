
const END_POINT = {
    CHECK_ID_SIGN: '/api/sign/public/check/id',
    SEND_EMAIL_SIGN: '/api/public/sign/send/email',
    VERIFY_EMAIL_SIGN: (txId: string) => { return `/api/public/sign/verify/email/${txId}` },
    USER_SIGN: '/api/public/sign/user'
}

export default END_POINT
