class EnrollLawFirmTrialRequestDto {
    title: string
    plaintiff: string // 원고
    defendant: string // 피고
    playVideo: any // 비디오
    subheading: string
    plaintiffOpinion: string
    defendantOpinion: string
    content: string
    files: any

    constructor(
        title: string,
        plaintiff: string,
        defendant: string,
        playVideo: any,
        subheading: string,
        plaintiffOpinion: string,
        defendantOpinion: string,
        content: string,
        files: any
    ) {
        this.title = title;
        this.plaintiff = plaintiff;
        this.defendant = defendant;
        this.playVideo = playVideo;
        this.subheading = subheading;
        this.plaintiffOpinion = plaintiffOpinion;
        this.defendantOpinion = defendantOpinion;
        this.content = content;
        this.files = files
    }
}

export default EnrollLawFirmTrialRequestDto
