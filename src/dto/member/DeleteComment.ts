class DeleteComment {
    boardCommentId: number
    password: string
    constructor(boardCommentId: number, password: string) {
        this.boardCommentId = boardCommentId
        this.password = password
    }
}

export default DeleteComment
