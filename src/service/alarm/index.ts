import get from "@/http/get";
import post from "@/http/post"
import AlarmReceiveList from "@/dto/alarm/AlarmReceiveList";
import AlarmSenderList from "@/dto/alarm/AlarmSenderList";

export default {
    AlarmReceiveList: (data: AlarmReceiveList, headers: any, subUrl: string) => {
        return get('/be/alarm/pq/receive', data, headers);
    },
    AlarmSenderList: (data: AlarmSenderList, headers: any, subUrl: string) => {
        return get('/be/alarm/pq/send', data, headers);
    }
}
