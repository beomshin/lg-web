import get from '../../get'
import post from '../../post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/http/endpoint'
import ParamsUtils from "@/http/ParamsUtils";

export default  {
    authReissue: () => {
        return get(EndPoint.AUTH_REISSUE, ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    }
}
