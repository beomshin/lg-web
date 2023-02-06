class UpdateBoard {
    boardId: number
    title: string
    content: string
    addFiles: any
    deleteFiles: any

    constructor(boardId: number, title: string, content: string, addFiles: any, deleteFiels: any) {
        this.boardId = boardId;
        this.title = title;
        this.content = content
        this.addFiles = addFiles
        this.deleteFiles = deleteFiels
    }

}

export default UpdateBoard