import { ITrainPlan } from "@/app/types/training-plan";
import { colls } from "@/lib/firebase/config";
import { getDocs } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const snapshot = await getDocs(colls.training_plans);
  let trainingPlans: ITrainPlan[] = []
  snapshot.docs.forEach(doc => {
    // @ts-expect-error
    trainingPlans.push({ ...doc.data(), slug: doc.id })
  })
  return new Response(JSON.stringify(trainingPlans))
}