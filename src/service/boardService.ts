import post from "@/http/post";
import get from "@/http/get";
import post2 from "@/http/post2";

export default {
    findBoards: (data: any) => {
        return get('/be/board/find/boards', data);
    },
    enrollAnonym: (data: any, headers: any) => {
        return post2('/be/board/enroll/anonym', data, headers);
    },
    enrollMember: (data: any, headers: any) => {
        return post2('/be/board/pq/enroll/member', data, headers)
    },
    findBoard: (url: any, data: any) => {
        return get(url, data);
    },
}
