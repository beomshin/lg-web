class UpdateLawFirmRequestDto {

    id: number
    introduction: string
    profile: any
    background: any

    constructor(
        id: number,
        introduction: string,
        profile: any,
        background: any
    ) {
        this.id = id;
        this.introduction = introduction;
        this.profile = profile
        this.background = background
    }
}

export default UpdateLawFirmRequestDto