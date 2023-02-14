import get from "@/http/get";
import post from "@/http/post"
import MessageReceiveList from "@/dto/message/MessageReceiveList";
import MessageSenderList from "@/dto/message/MessageSenderList";
import MessagePost from "@/dto/message/MessagePost";

export default {
    AlarmReceiveList: (data: MessageReceiveList, headers: any, subUrl: string) => {
        return get('/be/message/pq/receive', data, headers);
    },
    AlarmSenderList: (data: MessageSenderList, headers: any, subUrl: string) => {
        return get('/be/message/pq/send', data, headers);
    },
    MessagePost: (data: MessagePost, headers: any, subUrl: string) => {
        return post('/be/message/pq/post', data, headers);
    }
}
