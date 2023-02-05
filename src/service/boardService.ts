import get from "@/http/get";
import post from "@/http/post";
import FindBoards from "@/dto/board/FindBoards";
import EnrollUserBoard from "@/dto/board/EnrollUserBoard";
import EnrollAnonymBoard from "@/dto/board/EnrollAnonymBoard";

export default {
    findBoards: (data: FindBoards) => {
        return get('/be/board/find/boards', data);
    },
    enrollAnonym: (data: EnrollAnonymBoard, headers: any) => {
        return post('/be/board/enroll/anonym', data, headers);
    },
    enrollMember: (data: EnrollUserBoard, headers: any) => {
        return post('/be/board/pq/enroll/member', data, headers)
    },
    findBoard: (url: any, data: any) => {
        return get(url, data);
    },
}
