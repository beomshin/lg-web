import memberService from './member'
import boardService from './board'
import lawfirmService from './lawFirm'
import alarmService from './alarm'

export default {
    ...memberService,
    ...boardService,
    ...lawfirmService,
    ...alarmService
}
