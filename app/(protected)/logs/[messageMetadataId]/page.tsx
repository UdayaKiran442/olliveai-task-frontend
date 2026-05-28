import { getMessageMetadataByIdAPI } from "@/actions/messageMetadata.actions";
import MessageMetadataDetails from "@/components/MessageMetadataDetails";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ messageMetadataId: string }> }) {
    const { messageMetadataId } = await params;
    const { getToken } = await auth();
    const token = await getToken();
    if (!token) {
        redirect("/");
    }
    const messageMetadata = await getMessageMetadataByIdAPI({ metadataId: messageMetadataId }, token);
    return (
        <div>
            <MessageMetadataDetails metadata={messageMetadata.metadata} />
        </div>
    )
}