class LoginUserBoardRequestDto {
    id: number // 게시판 아이디
    password: string // 게시판 비밀번호

    constructor(
        id:number,
        password: string
    ) {
        this.id = id;
        this.password = password;
    }
}

export default LoginUserBoardRequestDto