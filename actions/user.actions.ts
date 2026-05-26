const BASE_URL = "http://localhost:3000/api/user";

export async function loginUserAPI(payload: { email: string, userId: string }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return await response.json();
}