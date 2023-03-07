class FindUserListTrialRequestDto {
    page: number
    pageNum: number
    topic: number
    subject: number
    keyword: string

    constructor(
        page: number,
        pageNum: number,
        topic: number,
        subject: number,
        keyword: string
    ) {
        this.page = page;
        this.pageNum = pageNum;
        this.topic = topic;
        this.subject = subject;
        this.keyword = keyword;
    }
}

export default FindUserListTrialRequestDto
