'use client'
import H1 from "@/app/components/Atom/H1"
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import React, { useEffect } from 'react'

type LayoutPlanProps = {
  params: { plan: string }
} & React.PropsWithChildren

export default function LayoutPlan({ children, params: { plan } }: LayoutPlanProps) {
  const { trainingPlan, updateTrainingPlan } = useTrainingPlan()

  useEffect(() => {
    updateTrainingPlan(plan)
  }, [plan, updateTrainingPlan])

  return (
    <TrainingPlanContext.Provider value={trainingPlan}>
      <H1>Plan de entrenamiento:<br />{trainingPlan?.title}</H1>
      <p>{trainingPlan?.description}</p>
      {children}
    </TrainingPlanContext.Provider>
  )
}
