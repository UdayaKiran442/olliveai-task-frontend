import { getChatMessagesAPI } from "@/actions/chat.actions";
import ChatMessages from "@/components/ChatMessages";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({params}: { params: Promise<{ chatId: string }> }) {
    const { chatId } = await params;
    const { getToken } = await auth();
    const token = await getToken();
    if (!token) {
        redirect('/');
    }
    const messages = await getChatMessagesAPI({chatId}, token)
    if (!messages.success) {
        // handle error
    }
    return (
        <div>
            <ChatMessages chatId={chatId} chatMessages={messages.messages} />
        </div>
    )
}