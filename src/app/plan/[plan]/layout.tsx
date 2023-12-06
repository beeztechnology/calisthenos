'use client'
import H1 from "@/app/components/Atom/H1"
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
    <>
      <H1>Plan de entrenamiento:<br />{trainingPlan?.title}</H1>
      <p>{trainingPlan?.description}</p>
      {children}
    </>
  )
}
