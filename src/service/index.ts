import memberService from './member'
import boardService from './board'
import lawfirmService from './lawFirm'
import messageService from './message'

export default {
    ...memberService,
    ...boardService,
    ...lawfirmService,
    ...messageService
}
