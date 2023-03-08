class FindAnonymChildrenCommentTrialRequestDto {
    id: string
    page: number
    pageNum: number

    constructor(
        id: string,
        page: number,
        pageNum: number
    ) {
        this.id = id;
        this.page = page;
        this.pageNum = pageNum;
    }
}

export default FindAnonymChildrenCommentTrialRequestDto
