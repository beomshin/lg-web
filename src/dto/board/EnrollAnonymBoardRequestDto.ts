class EnrollAnonymBoardRequestDto {
    id: string // 익명 아이디
    password: string // 익명 패스워드
    title: string // 제목
    content: string // 내용
    lineType: number // 라인 타입
    files: any // 파일

    constructor(
        id: string,
        password: string,
        title: string,
        content: string,
        lineType: number,
        files: any
    ){
        this.id = id;
        this.password = password;
        this.title = title;
        this.content = content;
        this.lineType = lineType;
        this.files = files;
    }

}

export default EnrollAnonymBoardRequestDto