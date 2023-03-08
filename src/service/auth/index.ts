import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";

export default  {
    authReissue: () => {
        return get('/api/auth/reissue', {},  HeaderUtils.AUTH_HEADER)
    }
}
