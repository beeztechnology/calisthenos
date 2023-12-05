'use client'
import H1 from "@/app/components/Atom/H1"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO)

  return (
    <>
      <H1>Plan de entrenamiento:<br />{trainingPlan?.title}</H1>
      <p>{trainingPlan?.description}</p>
      {children}
    </>
  )
}
