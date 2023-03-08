import boardEndPoint from './board'
import boardCommentEndPoint from './board/comment'
import AuthEndPoint from './auth'

export default  {
    ...boardEndPoint,
    ...boardCommentEndPoint,
    ...AuthEndPoint
}
