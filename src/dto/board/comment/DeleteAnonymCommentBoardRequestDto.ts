class DeleteAnonymCommentBoardRequestDto {

    id: number
    password: string

    constructor(
        id: number,
        password: string
    ) {
        this.id = id;
        this.password = password;
    }

}

export default DeleteAnonymCommentBoardRequestDto