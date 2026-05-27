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