"use client";

import { useState } from "react";
import { IChatMessage } from "@/types/types";
import { getChatMessagesAPI, sendMessageAPI } from "@/actions/chat.actions";
import { useAuth } from "@clerk/nextjs";
import { models } from "@/constants/constants";

interface ChatProps {
    chatMessages: IChatMessage[];
    chatId: string;
}

export default function ChatMessages({ chatMessages, chatId }: ChatProps) {
    const [inputValue, setInputValue] = useState("");
    const [selectedModel, setSelectedModel] = useState<keyof typeof models>("sarvam-30b");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState(chatMessages);
    const { getToken } = useAuth();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const currentInput = inputValue;
        setInputValue("");
        
        const token = await getToken();
        if (!token) return;

        const provider = models[selectedModel];

        // Optimistic Update
        setMessages([...messages, {
            messageId: `temp-${Date.now()}`,
            chatId,
            query: currentInput,
            response: "Generating response...",
            model: selectedModel,
            provider: provider,
            createdAt: new Date().toISOString()
        }]);
        
        setLoading(true);
        const newMessage = await sendMessageAPI({
            chatId,
            query: currentInput,
            model: selectedModel,
            provider: provider
        }, token);

        if (!newMessage.success) {
            // Handle error
        }
        await fetchMessages();
        setLoading(false);
    };

    async function fetchMessages() {
        const token = await getToken();
        if (!token) return;
        const messages = await getChatMessagesAPI({chatId}, token)
        if (!messages.success) {
            // handle error
        }
        setMessages(messages.messages);
    }

    return (
        <div className="flex flex-col h-screen bg-white">
            
            {/* Scrollable Chat History */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 pb-24">
                <div className="max-w-2xl mx-auto space-y-6">
                    {messages.map((message) => (
                        <div key={message.messageId} className="flex flex-col space-y-2">
                            
                            {/* User Query - Aligned Right */}
                            <div className="flex justify-end">
                                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[85%] shadow-sm">
                                    <p className="text-sm leading-relaxed">{message.query}</p>
                                </div>
                            </div>

                            {/* AI Response - Aligned Left */}
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%] shadow-sm border border-gray-200/50">
                                    <p className="text-sm leading-relaxed">{message.response}</p>
                                </div>
                            </div>

                            {/* Provider/Metadata */}
                            <div className="text-left pl-1">
                                <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                                    {message.provider}
                                </span>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Bottom Input Box */}
            <div className="border-t border-gray-100 bg-white p-4 sticky bottom-0 left-0 right-0">
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-2 items-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm text-gray-800"
                    />
                    
                    {/* Hardcoded Model Selector Dropdown */}
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value as keyof typeof models)}
                        disabled={loading}
                        className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 outline-none focus:border-blue-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <option value="sarvam-30b">Sarvam 30B</option>
                        <option value="gpt-4o-mini">GPT-4o Mini</option>
                    </select>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`cursor-pointer px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors shadow-sm ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>

        </div>
    );
}