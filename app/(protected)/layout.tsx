import { loginUserAPI } from "@/actions/user.actions"
import { Sidebar } from "@/components/Sidebar"
import { getCurrentUser } from "@/utils/currentUser.utils"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = await auth()
    if (!isAuthenticated) {
        redirect('/') // Redirect to the home page if the user is not authenticated
    }
    // call login api here, get user details and store in redux
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        redirect('/') // Redirect to the home page if the user is not authenticated
    }
    const user = await loginUserAPI({ email: currentUser.email, userId: currentUser.userId });
    
    return (
        <>
            <div className="flex w-full ">
                <div className="w-[10%] border-r border-border_primary">
                    <Sidebar />
                </div>
                <div className="flex-1 w-3/4">
                    {children}
                </div>
            </div>
        </>
  )
}
