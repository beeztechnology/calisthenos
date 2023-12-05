'use client'
import MonthContent from "@/app/components/MonthContent"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import React from 'react'

export default function Month({ params }: { params: { mes: string } }) {
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO)

  const mes = Number(params.mes)
  const getPlan = trainingPlan?.planificacion.find(el => el.month === mes)

  return (
    <>
      {getPlan && (
        <MonthContent planificacion={getPlan} />
      )}
    </>
  )
}
