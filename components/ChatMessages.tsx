import { IChatMessage } from "@/types/types";

export default function ChatMessages({ chatMessages }: { chatMessages: IChatMessage[] }) {
    return (
        <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto space-y-6">
            {chatMessages.map((message) => (
                <div key={message.messageId} className="flex flex-col space-y-2">
                    
                    {/* User Query - Aligned Right */}
                    <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%] shadow-sm">
                            <p className="text-sm leading-relaxed">{message.query}</p>
                        </div>
                    </div>

                    {/* AI Response - Aligned Left */}
                    <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%] shadow-sm border border-gray-200/50">
                            <p className="text-sm leading-relaxed">{message.response}</p>
                        </div>
                    </div>

                    {/* Provider/Metadata - Small text below the exchange */}
                    <div className="text-left pl-1">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                            {message.provider}
                        </span>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}