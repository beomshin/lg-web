import authService from './auth'
import boardService from './board'
import boardCommentService from './board/comment'
import boardTestService from './test/test3'
import lawFirmService from './lawFirm'
import lawfirmTestService from './test/test4'
import messageTestService from './test/test'
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
    ...messageTestService,
    ...messageService,
    ...signService,
    ...trialService,
    ...userService
}
