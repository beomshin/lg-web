import get from '../../http/get'
import post from '../../http/post'
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();

export default  {
    authReissue: () => {
        return get('/api/auth/reissue', {},  {Authorization: 'Bearer ' + cookies.get('lg.m.log')})
    }
}
