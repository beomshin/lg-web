import memberService from './member'
import boardService from './board'
import lawfirmService from './lawFirm'

export default {
    ...memberService,
    ...boardService,
    ...lawfirmService
}
