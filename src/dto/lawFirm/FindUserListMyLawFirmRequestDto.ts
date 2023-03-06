class FindUserListMyLawFirmRequestDto {
    id: number
    page: number
    pageNum: number
    subject: number
    keyword: string

    constructor(
        id: number,
        page: number,
        pageNum: number,
        subject: number,
        keyword: string
    ) {
        this.id = id;
        this.page = page;
        this.pageNum = pageNum;
        this.subject = subject;
        this.keyword = keyword
    }
}

export default FindUserListMyLawFirmRequestDto