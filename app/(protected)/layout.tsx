import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = await auth()
    if (!isAuthenticated) {
        redirect('/') // Redirect to the home page if the user is not authenticated
    }
    return (
        <>
            <div className="flex w-full ">
                <div className="w-[10%] border-r border-border_primary">
                layout here
                </div>
                <div className="flex-1 w-3/4">
                    {children}
                </div>
            </div>
        </>
  )
}
