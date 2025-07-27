import { users } from "./data";

// all users
export async function GET() {
    const test = await Promise.resolve('what is that?');
    if (test) return Response.json({ users, test });
};



