class FindBoards {
    page: number
    pageNum: number
    topic: number
    type: number
    subject: number
    keyword: string

    constructor(page: number, pageNum: number, topic: number, type: number, subject: number, keyword: string) {
        this.page = page;
        this.pageNum = pageNum;
        this.topic = topic;
        this.type = type
        this.subject = subject
        this.keyword = keyword
    }
}

export default FindBoards
