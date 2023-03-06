class ConfirmLawFirmRequestDto {
    id: number
    accept: number

    constructor(
        id: number,
        accept: number
    ) {
        this.id = id;
        this.accept = accept
    }
}

export default ConfirmLawFirmRequestDto