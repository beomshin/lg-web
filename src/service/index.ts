import authService from './auth'
import boardService from './board/test'
import lawfirmService from './lawFirm'
import messageService from './message'
import signService from './sign'
import trialService from './trial'
import userService from './user'

export default {
    ...authService,
    ...boardService,
    ...lawfirmService,
    ...messageService,
    ...signService,
    ...trialService,
    ...userService
}
