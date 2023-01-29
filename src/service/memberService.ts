import post from "@/http/post";

export default {
    login: (data: any) => {
        return post('/lg/login', data);
    }
}