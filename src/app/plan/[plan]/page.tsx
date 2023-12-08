'use client'
import PlanificationContent from "@/app/components/PlanificationContent"
import useTrainingPlan from "@/hooks/useTrainingPlan"

type PlanPageProps = {
}

export default function PlanPage({ }: PlanPageProps) {
  const { trainingPlan } = useTrainingPlan()

  if (trainingPlan) {
    return <PlanificationContent planificacion={trainingPlan?.planificacion} />
  }
  return <></>
}
