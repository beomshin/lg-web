class CheckIdUserRequestDto {

    loginId: string
    ci: string

    constructor(
        loginId: string,
        ci: string,
    ) {
        this.loginId = loginId;
        this.ci = ci;
    }

}

export default CheckIdUserRequestDto