import { users } from "./data";

// all users
export async function GET() {
    const test = await Promise.resolve('what is that?');
    if (test) return Response.json({ users, test });
};

// create user 
export async function POST(request: Request) {
    const user = await request.json();
    user.id = users.length + 1;
    users.push(user);
    return new Response(JSON.stringify(user), { status: 201 })
}



