class MemberSignDto {
    loginId: string;
    password: string;
    email: string;
    nickName: string;
    personalPeriod: number;

    constructor(loginId: string,
                password: string,
                email: string,
                nickName: string,
                personalPeriod: number) {
        this.loginId = loginId
        this.password = password
        this.email = email
        this.nickName = nickName
        this.personalPeriod = personalPeriod
    }
}

export default MemberSignDto