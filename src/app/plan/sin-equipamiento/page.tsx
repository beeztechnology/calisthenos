'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"

export default function SinEquipamiento() {
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO);

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan.planificacion} />
  }
  return <></>
}
