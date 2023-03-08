import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/endpoint'
import ParamsUtils from "@/http/ParamsUtils";

export default  {
    authReissue: () => {
        return get(EndPoint.AUTH_REISSUE, ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    }
}
