class SignUserRequestDto {

    loginId: string
    password: string
    nickName: string
    name: string
    email: string
    personalPeriod: number

    constructor(
        loginId: string,
        password: string,
        nickName: string,
        name: string,
        email: string,
        personalPeriod: number
    ) {
        this.loginId = loginId;
        this.password = password;
        this.nickName = nickName;
        this.name = nickName;
        this.email = email;
        this.personalPeriod = personalPeriod;
    }

}

export default SignUserRequestDto