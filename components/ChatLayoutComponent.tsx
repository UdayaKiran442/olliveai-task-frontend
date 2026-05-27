"use client";

import { IChat } from "@/types/types";
import { Plus } from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export function ChatLayoutComponent({chats}: {chats: IChat[]}) {
    const path = usePathname(); // example path: /chat or /chat/1
    return (
        <div>
            <div className="w-full mb-4">
                <div className="flex gap-2">
                    <Plus size={18} className="" />
                    <p className="text-gray-700 text-sm">New Chat</p>
                </div>
            </div>
            <div>
                {chats.map((chat) => (
                    <div key={chat.chatId} className={`hover:bg-gray-100 hover:rounded-2xl flex gap-2 items-center mt-2 p-2 cursor-pointer ${path === `/chat/${chat.chatId}` ? 'bg-gray-300 rounded' : ''}`} onClick={() => redirect(`/chat/${chat.chatId}`)}>
                        <p className="font-semibold text-sm">{chat.name || `Chat ${chat.chatId.slice(0, 5)}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}