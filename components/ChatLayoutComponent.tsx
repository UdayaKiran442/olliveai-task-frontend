import { SquareTerminal } from "lucide-react";

export function ChatLayoutComponent(){
    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <p className="text-gray-800 text-sm">Conversations</p>
                <button className="cursor-pointer border border-gray-400 py-0.5 px-2 text-sm rounded-md">
                    + New
                </button>
            </div>
            <div>
                <div className="flex gap-2 items-center mt-4 p-2 cursor-pointer bg-bg_secondary">
                    <SquareTerminal className="text-icon_primary" size={14} />
                    <p className="font-semibold text-sm">Codebot Session 1</p>
                </div>
            </div>
        </div>
    )
}