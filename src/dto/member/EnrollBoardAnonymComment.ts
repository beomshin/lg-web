class EnrollBoardAnonymComment {
    boardId: number
    bundleId: number
    id: string
    password: string
    content: string
    depth: number

    constructor(boardId: number, bundleId: number, id: string, password: string, content: string, depth: number) {
        this.boardId = boardId;
        this.bundleId = bundleId;
        this.id = id
        this.password = password
        this.content = content;
        this.depth = depth;
    }
}

export default EnrollBoardAnonymComment
