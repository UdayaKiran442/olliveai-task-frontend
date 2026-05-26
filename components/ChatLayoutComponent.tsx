"use client";

import { Plus } from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export function ChatLayoutComponent() {
    const path = usePathname(); // example path: /chat or /chat/1
    return (
        <div>
            <div className="w-full">
                <div className="flex gap-2">
                    <Plus size={18} className="" />
                    <p className="text-gray-700 text-sm">New Chat</p>
                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center mt-4 p-2 cursor-pointer bg-bg_secondary">
                    <p onClick={() => redirect("/chat/1")} className="font-semibold text-sm">Session 1</p>
                </div>
            </div>
        </div>
    )
}