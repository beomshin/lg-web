class SendMessageRequestDto {
    receiver: number
    title: string
    content: string

    constructor(
        receiver: number,
        title: string,
        content: string
    ) {
        this.receiver = receiver;
        this.title = title;
        this.content = content;
    }
}

export default SendMessageRequestDto