export default async function Page({ params }: { params: Promise<{ messageMetadataId: string }> }) {
    const { messageMetadataId } = await params;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Message Metadata Details</h1>
            <p>Message Metadata ID: {messageMetadataId}</p>
        </div>
    )
}