import post from "@/http/post";
import get from "@/http/get";
import post2 from "@/http/post2";

export default {
    findBoards: (data: any) => {
        return get('/lg/board/find/boards', data);
    },
    enrollAnonym: (data: any) => {
        return post('/lg/board/enroll/anonym', data);
    },
    enrollMember: (data: any, headers: any) => {
        return post2('/lg/board/pq/enroll/member', data, headers)
    },
    findBoard: (url: any, data: any) => {
        return get(url, data);
    },
}