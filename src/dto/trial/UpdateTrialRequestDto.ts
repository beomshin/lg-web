class UpdateTrialRequestDto {

    subheading: string
    plaintiffOpinion: string
    defendantOpinion: string
    content: string
    addFiles: any
    deleteFiles: any

    constructor(
        subheading: string,
        plaintiffOpinion: string,
        defendantOpinion: string,
        content: string,
        addFiles: any,
        deleteFiles: any
    ) {
        this.subheading = subheading;
        this.plaintiffOpinion = plaintiffOpinion;
        this.defendantOpinion = defendantOpinion;
        this.content = content;
        this.addFiles = addFiles;
        this.deleteFiles = deleteFiles;
    }
}

export default UpdateTrialRequestDto
