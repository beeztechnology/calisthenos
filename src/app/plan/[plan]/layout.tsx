'use client'
import H2 from "@/app/components/Atom/H2"
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import { usePathname } from "next/navigation"
import React, { Key, useEffect } from 'react'

type LayoutPlanProps = {
  params: { plan: string }
} & React.PropsWithChildren

export default function LayoutPlan({ children, params: { plan } }: LayoutPlanProps) {
  const { trainingPlan, getTrainingPlan } = useTrainingPlan()
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))

  useEffect(() => {
    const key: Key = 2
    if (trainingPlan) {
      addItem({
        title: trainingPlan?.title,
        key,
        href: `/plan/${plan}`,
      })
    }
    return () => {
      removeItem(key)
    }
  }, [addItem, removeItem, trainingPlan, plan])

  useEffect(() => {
    getTrainingPlan(plan)
  }, [plan, getTrainingPlan])

  return (
    <TrainingPlanContext.Provider value={trainingPlan}>
      <H2>{trainingPlan?.title}</H2>
      <p>{trainingPlan?.description}</p>
      {children}
    </TrainingPlanContext.Provider>
  )
}
