class EnrollUserCommentBoardRequestDto {

    id: number
    parentId: number
    content: string
    emoticon: string
    depth: number

    constructor(
        id: number,
        parentId: number,
        content: string,
        emoticon: string,
        depth: number
    ) {
        this.id = id;
        this.parentId = parentId;
        this.content = content;
        this.emoticon = emoticon;
        this.depth = depth;
    }
}

export default EnrollUserCommentBoardRequestDto

