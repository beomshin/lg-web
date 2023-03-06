class ApplyLawFirmRequestDto {
    id: number
    introduction: string

    constructor(
        id: number,
        introduction: string
    ) {
        this.id = id;
        this.introduction = introduction
    }
}

export default ApplyLawFirmRequestDto