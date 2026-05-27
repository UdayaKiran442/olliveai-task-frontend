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