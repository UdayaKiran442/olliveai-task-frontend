import { ChatLayoutComponent } from "@/components/ChatLayoutComponent";

export default async function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex bg-bg_primary h-screen w-full">
            <div className="w-[20%] p-5 border-r border-b border-border_primary h-screen">
                <ChatLayoutComponent />
            </div>

            <div className="w-[80%] p-5">
                {children}
            </div>
        </div>
    )
}