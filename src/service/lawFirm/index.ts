import get from "@/http/get";
import post from "@/http/post";
import LawFirmFindList from "@/dto/lawFirm/LawFirmFindList";


export default  {
    LawFirmFindList: (data: LawFirmFindList, headers: any, subUrl: string) => {
        return get('/be/lawfirm/find/list', data, headers)
    }
}
