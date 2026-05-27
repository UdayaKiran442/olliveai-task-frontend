"use client";

import { createChatAPI } from "@/actions/chat.actions";
import { useAuth } from "@clerk/nextjs";
import { Send } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ChatInput() {
    const [message, setMessage] = useState("");
    const { getToken } = useAuth();
    async function handleSendMessage() {
        const token = await getToken();
        if (!token) return;
        if (!message.trim()) return;
        const newChat = await createChatAPI(token);
        if (newChat.success) {
            redirect(`/chat/${newChat.chat.chatId}`);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <p className="font-medium text-xl text-center">
                What's on your mind today?
                </p>
                <div className="flex items-center w-full border rounded-xl px-3 py-2">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 outline-none bg-transparent"
                    />

                    <button onClick={handleSendMessage} className="ml-2 cursor-pointer">
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}