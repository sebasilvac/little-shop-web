import { NextResponse } from 'next/server';

export async function GET(request: Request, response: Response) {
  console.log({
    method: request.method,
    route: request.url,
  })

  return NextResponse.json({ count: 20 });
}
