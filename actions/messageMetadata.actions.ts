const BASE_URL = "http://localhost:3000/api/message-metadata";

import { IGetUserMessageMetadataResponse } from "@/types/types";

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