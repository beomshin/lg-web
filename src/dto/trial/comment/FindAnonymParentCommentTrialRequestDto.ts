class FindAnonymParentCommentTrialRequestDto {
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

export default FindAnonymParentCommentTrialRequestDto
