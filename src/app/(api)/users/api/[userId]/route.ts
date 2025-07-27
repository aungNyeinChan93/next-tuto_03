/* eslint-disable @typescript-eslint/no-explicit-any */
import { users } from "../data"

// method:GET , endpoint:users/api/{userId} , action:getuser
export async function GET(_request: Request, { params }: { params: Promise<{ userId: string }> }) {
    try {
        const { userId } = await params;
        const user = users.find((user: any) => user.id === Number(userId))
        if (user) return Response.json({ user })
    } catch (error) {
        console.error(error)
    }
}

// method:PATCH , endpoint:/users/api/{userId} , action:updateUser
export async function PATCH(request: Request, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const bodyData = await request.json();
    const usersData = users && users.map((user: any) => user.id === Number(userId) ? { ...user, ...bodyData } : user)
    return Response.json({ bodyData, usersData });
}