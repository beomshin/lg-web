class BoardLoginMember {
    boardId: number
    password: string
    constructor(boardId: number, password: string) {
        this.boardId = boardId
        this.password = password
    }
}

export default BoardLoginMember