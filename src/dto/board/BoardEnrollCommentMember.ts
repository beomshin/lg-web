class BoardEnrollCommentMember {
    boardId: number
    bundleId: number
    content: string
    depth: number

    constructor(boardId: number, bundleId: number, content: string, depth: number) {
        this.boardId = boardId;
        this.bundleId = bundleId;
        this.content = content;
        this.depth = depth;
    }
}

export default BoardEnrollCommentMember