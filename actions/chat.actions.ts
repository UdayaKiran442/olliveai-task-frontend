import { IGetUserChatsResponse, INewChatResponse } from "@/types/types";

const BASE_URL = "http://localhost:3000/api/chat";

export async function createChatAPI(token: string): Promise<INewChatResponse>{
    const newChat = await fetch(`${BASE_URL}/new-chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
    return await newChat.json();
}

export async function getUserChatsAPI(token: string): Promise<IGetUserChatsResponse> {
    const chats = await fetch(`${BASE_URL}/all-chats`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
    return await chats.json();
}