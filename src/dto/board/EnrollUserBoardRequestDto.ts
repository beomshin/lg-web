class EnrollUserBoardRequestDto {
    title: string // 제목
    content: string // 내용
    lineType: number // 라인 타입
    files: any // 파일

    constructor(
        title: string,
        content: string,
        lineType: number,
        files: any
    ){
        this.title = title;
        this.content = content;
        this.lineType = lineType;
        this.files = files;
    }
}

export default EnrollUserBoardRequestDto