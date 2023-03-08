
const END_POINT = {
    SEND_MESSAGE: '/api/send/message',
    REPLY_MESSAGE: '/api/reply/message',
    DELETE_SEND_MESSAGE: (id: string) => { return `/api/delete/send/message/${id}` },
    DELETE_RECEIVE_MESSAGE: (id: string) => { return `/api/delete/receive/message/${id}` },
    FIND_RECEIVE_LIST_MESSAGE: '/api/find/receive/list/message',
    FIND_SEND_LIST_MESSAGE: '/api/find/send/list/message',
    FIND_RECEIVE_MESSAGE: (id: string) => {  return `/api/find/receive/message/${id}` },
    FIND_SEND_MESSAGE: (id: string ) => { return `/api/find/send/message/${id}` },
}

export default END_POINT
