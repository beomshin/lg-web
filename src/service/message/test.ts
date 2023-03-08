import get from "@/http/get";
import post from "@/http/post"
import MessageReceiveList from "@/dto/etc/MessageReceiveList";
import MessageSenderList from "@/dto/etc/MessageSenderList";
import MessagePost from "@/dto/etc/MessagePost";
import MessageReadReceive from "@/dto/etc/MessageReadReceive";
import MessageReadSend from "@/dto/etc/MessageReadSend";
import MessageDelete from "@/dto/etc/MessageDelete";

export default {
    MessageReceiveList: (data: MessageReceiveList, headers: any, subUrl: string) => {
        return get('/be/message/pq/receive', data, headers);
    },
    MessageSenderList: (data: MessageSenderList, headers: any, subUrl: string) => {
        return get('/be/message/pq/send', data, headers);
    },
    MessagePost: (data: MessagePost, headers: any, subUrl: string) => {
        return post('/be/message/pq/post', data, headers);
    },
    MessageReadReceive: (data: MessageReadReceive, headers: any, subUrl: string) => {
        return post('/be/message/pq/read/receive', data, headers);
    },
    MessageReadSend: (data: MessageReadSend, headers: any, subUrl: string) => {
        return post('/be/message/pq/read/send', data, headers);
    },
    MessageDelete: (data: MessageDelete, headers: any, subUrl: string) => {
        return post('/be/message/pq/delete', data, headers);
    }
}
