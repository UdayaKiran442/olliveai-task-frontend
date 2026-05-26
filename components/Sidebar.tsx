"use client";

import Link from "next/link";
import { SideBarNavigation } from "./SidebarNavigation";
import { BookmarkIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
    const url = usePathname();
    const path = url.split('/')[1];
    const getActiveViewUrl = () => {
        if (path === 'chat') {
            return 'Chat';
        }
        if (path === 'logs') {
            return 'Logs';
        }
        return 'Chat';
    }
    const view = getActiveViewUrl();
    return (
        <div className="bg-[#FAFAFA] w-full h-screen p-4">
            <div>
                <Link href={'/chat'}>
                    <SideBarNavigation label="Chat" view={view}>
                        <BookmarkIcon size={18} />
                    </SideBarNavigation>
                </Link>
            </div>
        </div>
    )
}