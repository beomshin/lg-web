import AuthEndPoint from './auth'
import BoardEndPoint from './board'
import BoardCommentEndPoint from './board/comment'
import LawFirmEndPoint from './lawFirm'
import MessageEndPoint from './message'
import SignEndPoint from './sign'
import TrialEndPoint from './trial'
import TrialCommentEndPoint from './trial/comment'

export default  {
    ...BoardEndPoint,
    ...BoardCommentEndPoint,
    ...AuthEndPoint,
    ...LawFirmEndPoint,
    ...MessageEndPoint,
    ...SignEndPoint,
    ...TrialEndPoint,
    ...TrialCommentEndPoint
}
