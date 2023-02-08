class BoardCommentUpdate {
    boardCommentId: number
    password: string
    content: string

    constructor(boardCommentId: number, password: string, content: string) {
        this.boardCommentId = boardCommentId
        this.password = password
        this.content = content
    }
}

export default BoardCommentUpdate