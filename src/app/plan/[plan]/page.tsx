'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext"
import { useContext } from "react"

type PlanPageProps = {
}

export default function PlanPage({ }: PlanPageProps) {
  const trainingPlan = useContext(TrainingPlanContext)

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan.planificacion} />
  }
  return <></>
}
