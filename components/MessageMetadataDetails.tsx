import { IMessageMetadata } from "@/types/types";

export default function MessageMetadataDetails({ metadata }: { metadata: IMessageMetadata }) {
    if (!metadata) return null;

    return (
        <div className="max-w-3xl mx-auto mt-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-sm text-gray-700">
            
            {/* Header Section */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h3 className="text-base font-semibold text-gray-900">Execution Metadata</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                        Logged on {new Date(metadata.timestamp).toLocaleString()}
                    </p>
                </div>
                {/* Provider & Model Badges */}
                <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                        {metadata.provider}
                    </span>
                    <span className="text-xs font-mono bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md border border-gray-200/60">
                        {metadata.model}
                    </span>
                </div>
            </div>

            {/* Core Metrics & System IDs Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-100">
                
                {/* Left Side: System Trackers */}
                <div className="space-y-3.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tracking Identifiers</h4>
                    
                    <div className="space-y-2">
                        {[
                            { label: "Request ID", val: metadata.requestId },
                            { label: "Metadata ID", val: metadata.metadataId },
                            { label: "Message ID", val: metadata.messageId },
                            { label: "Chat ID", val: metadata.chatId },
                            { label: "User ID", val: metadata.userId },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between gap-4">
                                <span className="text-xs text-gray-500 font-medium">{item.label}</span>
                                <span 
                                    className="font-mono text-xs text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-200/40 truncate max-w-45 select-all cursor-pointer" 
                                    title={item.val}
                                >
                                    {item.val}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Performance Card */}
                <div className="flex flex-col justify-center bg-gray-50/50 rounded-xl p-5 border border-gray-100 text-center md:text-left">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Resource Consumption
                    </span>
                    <div className="text-3xl font-extrabold text-gray-900 tracking-tight font-mono">
                        {metadata.tokens.toLocaleString()}
                    </div>
                    <span className="text-xs text-gray-500 font-medium mt-1">
                        Total Tokens Consumed
                    </span>
                </div>

            </div>

            {/* Prompt & Response Details */}
            <div className="p-6 space-y-5">
                
                {/* Prompt Section */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Prompt Sent</label>
                    <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100 text-xs text-gray-800 font-sans whitespace-pre-wrap leading-relaxed">
                        {metadata.prompt}
                    </div>
                </div>

                {/* Response Section */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Response Received</label>
                    <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100 text-xs text-gray-800 font-sans whitespace-pre-wrap leading-relaxed">
                        {metadata.response}
                    </div>
                </div>

            </div>

        </div>
    );
}