import authService from './auth'
import boardService from './board'
import boardCommentService from './board/comment'
import lawFirmService from './lawFirm'
import trialService from './trial'
import trialCommentService from './trial/comment'
import messageService from './message'
import signService from './sign'
import userService from './user'

import boardTestService from './test/test3'
import lawfirmTestService from './test/test4'
import messageTestService from './test/test'

export default {
    ...authService,
    ...boardService,
    ...boardCommentService,
    ...lawFirmService,
    ...messageService,
    ...trialService,
    ...trialCommentService,
    ...signService,
    ...userService,
    ...lawfirmTestService,
    ...messageTestService,
    ...boardTestService,
}
