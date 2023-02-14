class MessageRead {
    messageId: number
    messageCallType: number

    constructor(messageId:number, messageCallType: number) {
        this.messageId = messageId;
        this.messageCallType = messageCallType
    }
}

export default MessageRead
