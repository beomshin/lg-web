class FindBoards {
    page: number
    pageNum: number
    topic: number
    type: number

    constructor(page: number, pageNum: number, topic: number, type: number) {
        this.page = page;
        this.pageNum = pageNum;
        this.topic = topic;
        this.type = type
    }
}

export default FindBoards