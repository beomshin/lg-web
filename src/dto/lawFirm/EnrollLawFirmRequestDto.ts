class EnrollLawFirmRequestDto {
    name: string
    introduction: string
    profile: any
    background: any

    constructor(
        name: string,
        introduction: string,
        profile: any,
        background: any
    ) {
        this.name = name;
        this.introduction = introduction;
        this.profile = profile
        this.background = background
    }
}

export default EnrollLawFirmRequestDto