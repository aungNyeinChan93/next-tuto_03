import { NextRequest } from "next/server";
import { users } from "./data";

// all users
// export async function GET() {
//     const test = await Promise.resolve('what is that?');
//     if (test) return Response.json({ users, test });
// };

// create user 
export async function POST(request: Request) {
    const user = await request.json();
    user.id = users.length + 1;
    users.push(user);
    return new Response(JSON.stringify(user), { status: 201 })
}

// getUsersByName and byGender , endpoint-> /users/api/ , params ->name=string or gender=male|female
export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get('name');
    const gender = searchParams.get('gender');
    const serachUsers = name
        ? users.find(user => user.name.includes(name))
        : gender
            ? users.filter(user => user.gender === gender)
            : users
    if (serachUsers) return Response.json({ serachUsers })
}



