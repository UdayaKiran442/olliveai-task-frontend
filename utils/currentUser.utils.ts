import { currentUser } from "@clerk/nextjs/server";


export async function getCurrentUser() {
    const user = await currentUser();
    if (user) {
        return {userId: user.id, email: user.emailAddresses[0].emailAddress};
    }
    return null;
}