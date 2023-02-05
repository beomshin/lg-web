class EnrollAnonymBoard {
    id: string
    password: string
    title: string
    content: string
    lineType: number
    files: any

    constructor(
        id: string,
        password: string,
        title: string,
        content: string,
        lineType: number,
        files: any)
    {
        this.id = id
        this.password = password
        this.title = title
        this.content = content
        this.lineType = lineType
        this.files = files
    }


}

export default EnrollAnonymBoard