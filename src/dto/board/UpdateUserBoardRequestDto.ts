class UpdateUserBoardRequestDto {
    id: string // 게시판 아이디
    password: string // 게시판 패스워드
    title: string // 제목
    content: string // 내용
    addFiles: any // 추가 파일
    deleteFiles: any // 삭제 파일

    constructor(
        id: string,
        password: string,
        title: string,
        content: string,
        addFiles: any,
        deleteFiles: any
    ){
        this.id = id;
        this.password = password;
        this.title = title;
        this.content = content;
        this.addFiles = addFiles;
        this.deleteFiles = deleteFiles;
    }
}

export default UpdateUserBoardRequestDto