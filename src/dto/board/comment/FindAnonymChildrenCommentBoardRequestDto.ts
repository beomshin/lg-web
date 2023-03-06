class FindAnonymChildrenCommentBoardRequestDto {

    page: number
    pageNum: number

    constructor(
        page: number,
        pageNum: number
    ) {
        this.page = page;
        this.pageNum = pageNum;
    }
}

export default FindAnonymChildrenCommentBoardRequestDto