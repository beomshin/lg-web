import authService from './auth'
import boardService from './board'
import boardCommentService from './board/comment'
import boardTestService from './board/test'
import lawFirmService from './lawFirm'
import lawfirmTestService from './lawFirm/test'
import messageService from './message'
import signService from './sign'
import trialService from './trial'
import userService from './user'

export default {
    ...authService,
    ...boardService,
    ...lawFirmService,
    ...boardCommentService,
    ...boardTestService,
    ...lawfirmTestService,
    ...messageService,
    ...signService,
    ...trialService,
    ...userService
}
