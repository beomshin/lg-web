import get from '../../http/get'
import post from '../../http/post'
import HeaderUtils from "@/http/headerUtils";
import EndPoint from '@/endpoint'
import ParamsUtils from "@/http/ParamsUtils";
import SendMessageRequestDto from "@/dto/message/SendMessageRequestDto";
import ReplyMessageRequestDto from "@/dto/message/ReplyMessageRequestDto";
import FindReceiveListMessageRequestDto from "@/dto/message/FindReceiveListMessageRequestDto";
import FindSendListMessageRequestDto from "@/dto/message/FindSendListMessageRequestDto";
import DeleteSendMessageRequestDto from "@/dto/message/DeleteSendMessageRequestDto";
import DeleteReceiveMessageRequestDto from "@/dto/message/DeleteReceiveMessageRequestDto";
import FindReceiveMessageRequestDto from "@/dto/message/FindReceiveMessageRequestDto";
import FindSendMessageRequestDto from "@/dto/message/FindSendMessageRequestDto";

export default  {
    sendMessage: (data: SendMessageRequestDto) => { // 메세지 전송
        return post(EndPoint.SEND_MESSAGE, data, HeaderUtils.AUTH_HEADER)
    },
    replyMessage: (data: ReplyMessageRequestDto) => { // 메세지 수신
        return post(EndPoint.REPLY_MESSAGE, data, HeaderUtils.AUTH_HEADER)
    },
    deleteSendMessage: (data: DeleteSendMessageRequestDto) => { // 발신 메세지 삭제
        return post(EndPoint.DELETE_SEND_MESSAGE(data.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    deleteReceiveMessage: (data: DeleteReceiveMessageRequestDto) => { // 수신 메세지 삭제
        return post(EndPoint.DELETE_RECEIVE_MESSAGE(data.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    findReceiveListMessage: (params: FindReceiveListMessageRequestDto) => { // 수신 메세지 리스트 조회
        return get(EndPoint.FIND_RECEIVE_LIST_MESSAGE, params, HeaderUtils.AUTH_HEADER)
    },
    findSendListMessage: (params: FindSendListMessageRequestDto ) => { // 발신 메세지 리스트 조회
        return get(EndPoint.FIND_SEND_LIST_MESSAGE, params, HeaderUtils.AUTH_HEADER)
    },
    findReceiveMessage: (data: FindReceiveMessageRequestDto) => { // 수신 메세지 상세 조회
        return post(EndPoint.FIND_RECEIVE_MESSAGE(data.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    },
    findSendMessage: (data: FindSendMessageRequestDto) => { // 발신 메세지 상세 조회
        return post(EndPoint.FIND_SEND_MESSAGE(data.id), ParamsUtils.EMPTY, HeaderUtils.AUTH_HEADER)
    }
}
