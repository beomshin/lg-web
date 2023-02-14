import get from "@/http/get";
import post from "@/http/post"
import MessageReceiveList from "@/dto/message/MessageReceiveList";
import MessageSenderList from "@/dto/message/MessageSenderList";

export default {
    AlarmReceiveList: (data: MessageReceiveList, headers: any, subUrl: string) => {
        return get('/be/message/pq/receive', data, headers);
    },
    AlarmSenderList: (data: MessageSenderList, headers: any, subUrl: string) => {
        return get('/be/message/pq/send', data, headers);
    }
}
