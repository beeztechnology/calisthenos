'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import { useContext } from "react"
import { TrainingPlanContext } from "./layout"

type PlanPageProps = {
}

export default function PlanPage({ }: PlanPageProps) {
  const trainingPlan = useContext(TrainingPlanContext)

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan.planificacion} />
  }
  return <></>
}
