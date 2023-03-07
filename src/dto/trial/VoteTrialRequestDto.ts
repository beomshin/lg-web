class VoteTrialRequestDto {
    id: number
    precedent: number


    constructor(id: number, precedent: number) {
        this.id = id;
        this.precedent = precedent;
    }
}

export default VoteTrialRequestDto
