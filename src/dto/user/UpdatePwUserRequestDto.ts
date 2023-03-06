class UpdatePwUserRequestDto {
    loginId: string
    ci: string
    password: string

    constructor(
        loginId: string,
        ci: string,
        password: string
    ) {
        this.loginId = loginId;
        this.ci = ci;
        this.password = password;
    }
}

export default UpdatePwUserRequestDto