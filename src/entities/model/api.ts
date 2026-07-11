import { NextResponse } from "next/server";

import { geAppPayload } from "@/shared/payload";

export async function POST(req: Request) {
  const payload = await geAppPayload();

  const body = await req.json();

  const order = await payload.create({
    //@ts-expect-error bug from payload
    collection: "orders",
    data: body,
  });

  return NextResponse.json(order);
}
