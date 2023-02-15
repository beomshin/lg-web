import get from "@/http/get";
import post from "@/http/post"
import MessageReceiveList from "@/dto/message/MessageReceiveList";
import MessageSenderList from "@/dto/message/MessageSenderList";
import MessagePost from "@/dto/message/MessagePost";
import MessageReadReceive from "@/dto/message/MessageReadReceive";
import MessageReadSend from "@/dto/message/MessageReadSend";
import MessageDelete from "@/dto/message/MessageDelete";

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
