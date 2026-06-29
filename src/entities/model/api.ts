import { NextResponse } from "next/server";

import { geAppPayload } from "@/shared/payload";

export async function POST(req: Request) {
  const payload = await geAppPayload();

  const body = await req.json();

  const order = await payload.create({
    collection: "orders",
    data: body,
  });

  return NextResponse.json(order);
}
