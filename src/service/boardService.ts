import get from "@/http/get";
import post from "@/http/post";
import FindBoards from "@/dto/board/FindBoards";

export default {
    findBoards: (data: FindBoards) => {
        return get('/be/board/find/boards', data);
    },
    enrollAnonym: (data: any, headers: any) => {
        return post('/be/board/enroll/anonym', data, headers);
    },
    enrollMember: (data: any, headers: any) => {
        return post('/be/board/pq/enroll/member', data, headers)
    },
    findBoard: (url: any, data: any) => {
        return get(url, data);
    },
}
