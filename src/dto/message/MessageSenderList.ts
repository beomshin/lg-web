class MessageSenderList {
    page: number
    pageNum: number
    subject: number
    keyword: string

    constructor(page: number, pageNum: number, subject: number, keyword: string) {
        this.page = page;
        this.pageNum = pageNum
        this.subject = subject
        this.keyword = keyword
    }
}

export default MessageSenderList
