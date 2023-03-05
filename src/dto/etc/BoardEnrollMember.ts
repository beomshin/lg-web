class BoardEnrollMember {
    title: string
    content: string
    lineType: number
    files: any

    constructor(title: string, content: string, lineType: number, files: any) {
        this.title = title
        this.content = content
        this.lineType = lineType
        this.files = files
    }
}

export default BoardEnrollMember