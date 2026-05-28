import { getUserMessageMetadataAPI } from "@/actions/messageMetadata.actions";
import Metadata from "@/components/Metadata";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page(){
    const { getToken } = await auth();
    const token = await getToken();
    if (!token) {
        redirect("/");
    }
    const metadata = await getUserMessageMetadataAPI(token);
    return (
        <div>
            <Metadata messageMetadata={metadata.metadata} />
        </div>
    )
}