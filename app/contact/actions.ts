"use server";

import { redis } from "@/lib/redis";

export async function submitContact(
  prevState: { success: boolean | null },
  formData: FormData
) {
  try {
    const entry = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date().toISOString(),
    };

    await redis.lpush("contacts", entry);

    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}
