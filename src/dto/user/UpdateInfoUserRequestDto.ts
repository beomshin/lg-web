class UpdateInfoUserRequestDto {
    profile: any
    nickName: string

    constructor(
        profile: any,
        nickName: string
    ) {
        this.profile = profile;
        this.nickName = nickName;
    }
}

export default UpdateInfoUserRequestDto