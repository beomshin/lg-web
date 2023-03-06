class MemberLoginDto {
    loginId: string;
    password: string;

    constructor(loginId: string, password: string) {
        this.loginId = loginId;
        this.password = password;
    }
}

export default MemberLoginDto