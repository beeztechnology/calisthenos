'use client'
import H1 from "@/app/components/Atom/H1"
import { SIN_EQUIPAMIENTO } from "@/db/constants.db"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import React, { useEffect } from 'react'

type LayoutProps = {
  params: { plan: string }
} & React.PropsWithChildren

export default function Layout({ children, params: { plan } }: LayoutProps) {
  const { trainingPlan, updateTrainingPlan } = useTrainingPlan()

  useEffect(() => {
    updateTrainingPlan(SIN_EQUIPAMIENTO)
  }, [plan, updateTrainingPlan])

  return (
    <>
      <H1>Plan de entrenamiento:<br />{trainingPlan?.title}</H1>
      <p>{trainingPlan?.description}</p>
      {children}
    </>
  )
}
