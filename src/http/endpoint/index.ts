import AuthEndPoint from './auth'
import BoardEndPoint from './board'
import BoardCommentEndPoint from './board/comment'
import LawFirmEndPoint from './lawFirm'
import MessageEndPoint from './message'
import SignEndPoint from './sign'

export default  {
    ...BoardEndPoint,
    ...BoardCommentEndPoint,
    ...AuthEndPoint,
    ...LawFirmEndPoint,
    ...MessageEndPoint,
    ...SignEndPoint
}
