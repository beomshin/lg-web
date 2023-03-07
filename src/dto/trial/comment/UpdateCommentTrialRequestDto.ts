class UpdateCommentTrialRequestDto {
    id: number
    password: string
    content: string

    constructor(
        id: number,
        password: string,
        content: string
    ) {
        this.id = id;
        this.password = password;
        this.content = content;
    }
}

export default UpdateCommentTrialRequestDto
