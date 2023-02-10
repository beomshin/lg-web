import get from "@/http/get";
import post from "@/http/post";
import LawFirmFindList from "@/dto/lawFirm/LawFirmFindList";
import LawFirmFIndDetail from "@/dto/lawFirm/LawFirmFIndDetail";


export default  {
    LawFirmFindList: (data: LawFirmFindList, headers: any, subUrl: string) => {
        return get('/be/lawfirm/find/list', data, headers)
    },
    LawFirmFindDetail: (data: LawFirmFIndDetail, headers: any, subUrl: string) => {
        return get(`/be/lawfirm/find/detail/${subUrl}`, data, headers)
    }
}
