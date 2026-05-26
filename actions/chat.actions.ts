const BASE_URL = "http://localhost:3000/api/chat";

export async function createChatAPI(token: string){
    const newChat = await fetch(`${BASE_URL}/new-chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
    return await newChat.json();
}