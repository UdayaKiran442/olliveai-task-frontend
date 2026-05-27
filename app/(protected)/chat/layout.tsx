import { getUserChatsAPI } from "@/actions/chat.actions";
import { ChatLayoutComponent } from "@/components/ChatLayoutComponent";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {
    const { getToken } = await auth();
    const token = await getToken();
    if (!token) {
        redirect('/');
    }
    const chats = await getUserChatsAPI(token);
    if (!chats.success) {
        // handle error
    }
    return (
        <div className="flex h-full w-full">
            <div className="w-[20%] p-5 border-r h-full ">
                <ChatLayoutComponent chats={chats.chats} />
            </div>

            <div className="w-[80%] p-5">
                {children}
            </div>
        </div>
    )
}