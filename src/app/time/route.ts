// endpoint -> /time

import { NextRequest } from "next/server"

export const revalidate = 10;

// time
export async function GET(request: NextRequest) {
    const timeCookie = request.cookies.get('time')
    return Response.json({ time: new Date().toLocaleDateString(), timeCookie: timeCookie?.value }, {
        status: 200,
        headers: {
            'Content-type': "application/json",
            'Set-Cookie': `time=${new Date().toLocaleTimeString()}`
        }
    })
}