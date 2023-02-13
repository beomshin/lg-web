import get from "@/http/get";
import post from "@/http/post";
import LawFirmFindList from "@/dto/lawFirm/LawFirmFindList";
import LawFirmFIndDetail from "@/dto/lawFirm/LawFirmFIndDetail";
import LawFirmBoardEnroll from "@/dto/lawFirm/LawFirmBoardEnroll";
import LawFirmApply from "@/dto/lawFirm/LawFirmApply";



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
