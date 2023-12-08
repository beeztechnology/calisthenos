'use client'
import H1 from "@/app/components/Atom/H1"
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useBreadcrumbStore } from "@/store/breadcrumb.store"
import { usePathname } from "next/navigation"
import React, { useEffect } from 'react'

type LayoutPlanProps = {
  params: { plan: string }
} & React.PropsWithChildren

export default function LayoutPlan({ children, params: { plan } }: LayoutPlanProps) {
  const { trainingPlan, updateTrainingPlan } = useTrainingPlan()
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))
  const currentPath = usePathname()

  useEffect(() => {
    if (trainingPlan) {
      addItem({
        title: trainingPlan?.title,
        key: plan,
        href: `/plan/${plan}`,
      })
    }
    return () => {
      removeItem(plan)
    }
  }, [addItem, removeItem, currentPath, trainingPlan, plan])

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
