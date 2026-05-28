"use client";

import { IMessageMetadata } from "@/types/types";
import { redirect } from "next/navigation";

export default function Metadata({ messageMetadata }: { messageMetadata: IMessageMetadata[] }) {
    if (!messageMetadata || messageMetadata.length === 0) {
        return (
            <div className="bg-white p-8 text-center rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500">No metadata available.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden">
            
            {/* Header Section */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-base font-semibold text-gray-900">Message Metadata</h3>
                <p className="text-xs text-gray-500 mt-0.5">Detailed execution logs and token usage per message.</p>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/70 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                            <th className="py-3 px-6">Chat ID</th>
                            <th className="py-3 px-6">Timestamp / Request</th>
                            <th className="py-3 px-6">Model Info</th>
                            <th className="py-3 px-6 max-w-xs">Prompt</th>
                            <th className="py-3 px-6 max-w-xs">Response</th>
                            <th className="py-3 px-6 text-right">Tokens</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                        {messageMetadata.map((meta) => (
                            <tr onClick={() => redirect(`/logs/${meta.metadataId}`)} key={meta.metadataId} className="hover:bg-gray-50/50 transition-colors cursor-pointer">

                                {/* ChatId */}
                                <td className="py-4 px-6 whitespace-nowrap">
                                    <div className="text-[11px] text-gray-400 font-mono mb-0.5">
                                        Chat ID: {meta.chatId}
                                    </div>
                                </td>
                                
                                {/* Timestamp & Request ID */}
                                <td className="py-4 px-6 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">
                                        {new Date(meta.timestamp).toLocaleString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(',', '')}
                                    </div>
                                    <div className="text-[11px] text-gray-400 font-mono mt-0.5 max-w-30 truncate" title={meta.requestId}>
                                        ID: {meta.requestId}
                                    </div>
                                </td>

                                {/* Provider & Model Tags */}
                                <td className="py-4 px-6 whitespace-nowrap">
                                    <div className="flex flex-col gap-1 items-start">
                                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md uppercase tracking-wide">
                                            {meta.provider}
                                        </span>
                                        <span className="text-xs text-gray-600 font-mono">
                                            {meta.model}
                                        </span>
                                    </div>
                                </td>

                                {/* Prompt Truncated */}
                                <td className="py-4 px-6 max-w-xs">
                                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed" title={meta.prompt}>
                                        {meta.prompt}
                                    </p>
                                </td>

                                {/* Response Truncated */}
                                <td className="py-4 px-6 max-w-xs">
                                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed" title={meta.response}>
                                        {meta.response}
                                    </p>
                                </td>

                                {/* Tokens Right-Aligned */}
                                <td className="py-4 px-6 text-right font-mono text-xs font-semibold text-gray-900 whitespace-nowrap">
                                    {meta.tokens.toLocaleString()}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}