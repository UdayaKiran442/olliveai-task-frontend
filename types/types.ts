export type ISuccessResponse = {
    success: boolean;
    message?: string;
}

export type INewChatResponse =  ISuccessResponse & {
    chat: {
        chatId: string;
        userId: string;
        createdAt: string;
        updatedAt: string;
    }
}

export type IChat = {
    chatId: string;
    userId: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
}

export type IGetUserChatsResponse = ISuccessResponse & {
    chats: IChat[];
}

export type IChatMessage = {
    messageId: string;
    chatId: string;
    query: string;
    response: string;
    model: string;
    provider: string;
    createdAt: string;
}

export type IGetChatMessagesResponse = ISuccessResponse & {
    messages: IChatMessage[];
}

export type IChatQueryResponse = ISuccessResponse & {
    message: IChatMessage;
}

export type IMessageMetadata = {
    metadataId: string;
    messageId: string;
    userId: string;
    chatId: string;
    prompt: string;
    response: string;
    tokens: number;
    provider: string;
    model: string;
    requestId: string;
    timestamp: string;
}

export type IGetUserMessageMetadataResponse = ISuccessResponse & {
    metadata: IMessageMetadata[];
}