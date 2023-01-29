import memberService from "@/service/memberService";
import boardService from "@/service/boardService";

export default {
    ...memberService,
    ...boardService
}