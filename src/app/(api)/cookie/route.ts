import { NextRequest } from "next/server"
import { cookies, headers } from "next/headers";


export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const data = searchParams.get('data');

    // const header = new Headers(request.headers);
    // const test = header.get('test')

    const nextHeader = await headers();
    const test = nextHeader.get('test')

    const cookiesStorage = await cookies();
    cookiesStorage.set('data', JSON.stringify(data));


    return Response.json({
        test,
        data,
        getCookie: cookiesStorage.get('data'),
        result: cookiesStorage.get('data')?.value
    })
}