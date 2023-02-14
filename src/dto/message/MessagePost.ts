class MessagePost {
    receiver: string
    title: string
    content: string

    constructor(receiver: string, title: string, content: string) {
        this.receiver = receiver
        this.title = title
        this.content = content;
    }

}

export default MessagePost
