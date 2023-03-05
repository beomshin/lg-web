class FindAllListBoardRequestDto {
    page: number // 페이지
    type: number // 라인 타입
    pageNum: number // 페이지 개수
    topic: number // 토픽 (new , hot)
    subject: number // 검색 조건
    keyword: string // 키워드

    constructor(
        page: number,
        type: number,
        pageNum: number,
        topic: number,
        subject: number,
        keyword: string
    ){
        this.page = page;
        this.type = type;
        this.pageNum = pageNum;
        this.topic = topic;
        this.subject = subject;
        this.keyword = keyword;
    }
}

export default FindAllListBoardRequestDto