class LawFirmBoardEnroll {
    lawFirmId: number
    title: string
    content: string
    lineType: number
    files: any

    constructor(
        lawFirmId: number,
        title: string,
        content: string,
        lineType: number,
        files: any
    )
    {
        this.lawFirmId = lawFirmId
        this.title = title
        this.content = content
        this.lineType = lineType
        this.files = files
    }

}

export default LawFirmBoardEnroll