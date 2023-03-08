class VerifyEmailSignRequestDto {
    txId: string
    code: string

    constructor(txId: string, code: string) {
        this.txId = txId;
        this.code = code;
    }

    getParams() {
        return { code: this.code }
    }
}

export default VerifyEmailSignRequestDto
