import { trainingPlans as list } from "@/app/api/db/training-plans.db"
import { NextRequest } from "next/server";

interface Params {
  slug: string;
}
interface Options {
  params: Params
}

export async function GET(req: NextRequest, { params: { slug } }: Options) {
  const trainingPlan = list.find(p => p.slug === slug) ?? {}
  return new Response(JSON.stringify(trainingPlan))
}