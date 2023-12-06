'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useEffect } from "react"

type PageProps = {
  params: { plan: string }
}

export default function Page({ params: { plan } }: PageProps) {
  const { trainingPlan, updateTrainingPlan } = useTrainingPlan();

  useEffect(() => {
    updateTrainingPlan(plan)
  }, [plan, updateTrainingPlan])

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan.planificacion} />
  }
  return <></>
}
