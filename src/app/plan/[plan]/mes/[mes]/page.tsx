'use client'
import MonthContent from "@/app/components/MonthContent"
import { Planificacion } from "@/app/types/training-plan"
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext"
import { useContext, useEffect, useState } from 'react'

type MonthPageProps = {
  params: {
    mes: string;
    plan: string;
  }
}

export default function MonthPage({ params }: MonthPageProps) {
  const [plan, setPlan] = useState<Planificacion | undefined>(undefined)
  const trainingPlan = useContext(TrainingPlanContext)
  const mes = Number(params.mes)

  useEffect(() => {
    setPlan(trainingPlan?.planificacion.find(el => el.month === mes))
  }, [mes, trainingPlan?.planificacion])

  if (plan) {
    return <MonthContent planificacion={plan} />
  }
  return <></>
}
