import { isValidWebhookEventForRevalidation } from "@/lib/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const authKey = req.headers.get("Authorization")?.toString();
  const validateEvent = await isValidWebhookEventForRevalidation(req);

  if (validateEvent.error)
    return NextResponse.json({ message: validateEvent.error }, { status: 400 });

  if (!validateEvent.shouldRevalidate)
    return NextResponse.json(
      { message: "Skipping revalidation!" },
      { status: 200 },
    );

  if (!authKey || authKey !== process.env.STATIC_REGENERATE_KEY)
    return NextResponse.json({ message: "Unauthorized!" }, { status: 401 });
  revalidatePath("/");
  return NextResponse.json(
    { message: "Started regeneration successfully!" },
    { status: 200 },
  );
}
