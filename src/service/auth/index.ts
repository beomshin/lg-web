import get from '../../http/get'
import post from '../../http/post'
import {useCookies} from "vue3-cookies";
import CookieCont from "@/constants/CookieCont";
const { cookies } = useCookies();

export default  {
    authReissue: () => {
        return get('/api/auth/reissue', {},  {Authorization: 'Bearer ' + cookies.get(CookieCont.AUTH_COOKIE_NAME)})
    }
}
