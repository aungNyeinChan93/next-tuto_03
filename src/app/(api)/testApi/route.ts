import { headers } from "next/headers";
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
export async function GET() {
    const header = await headers();
    const auth = header.get('Authorization');
    const name = header.get('name');

    // return Response.json({ auth, name })
    return new Response(`<h1>${JSON.stringify({ auth, name })}</h1>`, {
        headers: {
            'Content-type': 'text/html'
        }
    })
}