import { exercises as list } from "@/app/api/db/exercises.db"
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify(list))
}