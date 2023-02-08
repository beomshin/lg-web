import memberService from './member'
import boardService from './board'

export default {
    ...memberService,
    ...boardService
}