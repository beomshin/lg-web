class EnrollLawFirmBoardRequestDto {
    id: string // 로펌 아이디
    title: string // 제목
    content: string // 내용
    lineType: number // 라인 타입
    files: any // 파일

    constructor(
        id: string,
        title: string,
        content: string,
        lineType: number,
        files: any
    ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.lineType = lineType;
        this.files = files;
    }
}

export default EnrollLawFirmBoardRequestDto