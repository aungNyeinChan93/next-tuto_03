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
    const usersData = users && userId && users.map((user: any) => user.id === Number(userId) ? { ...user, ...bodyData } : user)
    return Response.json({ bodyData, usersData });
}

// method:Delete , endpoint:/users/api/{userId} , action:deleteUser
export async function DELETE(_request: Request, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const index: any = users && userId && users.findIndex(user => user.id === Number(userId))
    const deleteUser = users[index];
    users.splice(index, 1)
    return Response.json({ deleteUser, index, users })
}
