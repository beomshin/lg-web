class EnrollAnonymCommentBoardRequestDto {

    id: number
    parentId: number
    loginId: string
    password: string
    content: string
    emoticon: string
    depth: number

    constructor(
        id: number,
        parentId: number,
        loginId: string,
        password: string,
        content: string,
        emoticon: string,
        depth: number
    ) {
        this.id = id;
        this.parentId = parentId;
        this.loginId = loginId;
        this.password = password;
        this.content = content;
        this.emoticon = emoticon;
        this.depth = depth;
    }

}

export default EnrollAnonymCommentBoardRequestDto