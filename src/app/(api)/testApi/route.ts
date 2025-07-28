import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

// Get header Data in next js!!

// >>> first way 
// export async function GET(request: NextRequest) {
//     const name = 'testAPi'
//     const headers = new Headers(request.headers)
//     const authorization = headers.get('Authorization')
//     return Response.json({ name, headers: headers.get('name'), authorization })
// }

// >>> sec way
export async function GET(request: NextRequest) {

    const header = await headers();  // next header
    const auth = header.get('Authorization');
    const name = header.get('name');

    // get cookie
    const theme = request.cookies.get('theme')
    const cookieName = request.cookies.get('name');

    const cookieStorage = await cookies(); //next cookie
    cookieStorage.set('username', "aung nyein chan")

    // delete cookie
    // cookieStorage.delete('theme')

    return Response.json(
        {
            auth,
            name,
            theme: theme?.value,
            cookieName: cookieName,
            username: cookieStorage.get('username'),
        })

    return new Response('header and cookies', {
        // set tradational response header and set cookies
        headers: {
            'Content-type': 'application/json',
            'Set-Cookie': 'theme=night',
        }
    })
}