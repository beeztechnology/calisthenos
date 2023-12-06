'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useEffect } from "react"

type PlanPageProps = {
  params: { plan: string }
}

export default function PlanPage({ params: { plan } }: PlanPageProps) {
  const { trainingPlan, updateTrainingPlan } = useTrainingPlan();

  useEffect(() => {
    updateTrainingPlan(plan)
  }, [plan, updateTrainingPlan])

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan.planificacion} />
  }
  return <></>
}
