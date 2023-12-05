'use client'
import MonthContent from "@/app/components/MonthContent"
import { Planificacion } from "@/app/types"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import React, { useEffect, useState } from 'react'

export default function Month({ params }: { params: { mes: string } }) {
  const [plan, setPlan] = useState<Planificacion | undefined>(undefined)
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO)

  const mes = Number(params.mes)

  useEffect(() => {
    setPlan(trainingPlan?.planificacion.find(el => el.month === mes))
  }, [mes, trainingPlan?.planificacion])

  if (plan) {
    return <MonthContent planificacion={plan} />
  }
  return <></>
}
