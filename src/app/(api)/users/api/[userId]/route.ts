/* eslint-disable @typescript-eslint/no-explicit-any */
import { users } from "../data"

// getuser
export async function GET(request: Request, { params }: { params: Promise<{ userId: string }> }) {
    try {
        const { userId } = await params;
        const user = users.find((user: any) => user.id === Number(userId))
        if (user) return Response.json({ user })
    } catch (error) {
        console.error(error)
    }
}