const BASE_URL = "http://localhost:3000/api/message-metadata";

import { IGetMessageMetadataByIdResponse, IGetUserMessageMetadataResponse } from "@/types/types";

export async function getUserMessageMetadataAPI(token: string): Promise<IGetUserMessageMetadataResponse> {
    const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function getMessageMetadataByIdAPI(payload: { metadataId: string }, token: string): Promise<IGetMessageMetadataByIdResponse> {
    const response = await fetch(`${BASE_URL}/fetch-log`, {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}