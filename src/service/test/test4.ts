import get from "@/http/get";
import post from "@/http/post";
import LawFirmFindList from "@/dto/etc/LawFirmFindList";
import LawFirmFIndDetail from "@/dto/etc/LawFirmFIndDetail";
import LawFirmBoardEnroll from "@/dto/etc/LawFirmBoardEnroll";
import LawFirmApply from "@/dto/etc/LawFirmApply";



export default  {
    LawFirmFindList: (data: LawFirmFindList, headers: any, subUrl: string) => {
        return get('/be/lawfirm/find/list', data, headers)
    },
    LawFirmFindDetail: (data: LawFirmFIndDetail, headers: any, subUrl: string) => {
        return get(`/be/lawfirm/find/detail/${subUrl}`, data, headers)
    },
    LawFirmBoardEnroll: (data: LawFirmBoardEnroll, headers: any, subUrl: string) => {
        return post('/be/board/pq/enroll/lawfirm', data, headers)
    },
    LawFirmApply: (data: LawFirmApply, headers: any, subUrl: string) => {
        return post('/be/lawfirm/pq/apply', data, headers)
    }
}
