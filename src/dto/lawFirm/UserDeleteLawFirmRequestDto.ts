class UserDeleteLawFirmRequestDto {
    id: number
    userId: number

    constructor(
        id: number,
        userId: number
    ) {
        this.id = id;
        this.userId = userId;
    }
}

export default UserDeleteLawFirmRequestDto