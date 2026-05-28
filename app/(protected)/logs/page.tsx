import { getUsageStatsAPI, getUserMessageMetadataAPI } from "@/actions/messageMetadata.actions";
import Metadata from "@/components/Metadata";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page(){
    const { getToken } = await auth();
    const token = await getToken();
    if (!token) {
        redirect("/");
    }
    const [metadata, stats] = await Promise.all([
        getUserMessageMetadataAPI(token),
        getUsageStatsAPI(token)
    ])
    return (
        <div>
            <Metadata usageStats={stats.stats} messageMetadata={metadata.metadata} />
        </div>
    )
}