class BoardFindList {
    page: number
    pageNum: number
    topic: number
    type: number
    subject: number
    keyword: string
    lid: number

    constructor(page: number, pageNum: number, topic: number, type: number, subject: number, keyword: string, lid: number) {
        this.page = page;
        this.pageNum = pageNum;
        this.topic = topic;
        this.type = type
        this.subject = subject
        this.keyword = keyword
        this.lid = lid
    }
}

export default BoardFindList