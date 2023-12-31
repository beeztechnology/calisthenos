'use client'
import H2 from "@/app/components/Atom/H2"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import React, { Key, useEffect } from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { plan: string, level: string, mes: string }
}

export default function Layout({ children, params: { plan, mes } }: LayoutProps) {
  const { trainingPlan } = useTrainingPlan()
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))

  useEffect(() => {
    const key: Key = 4
    if (trainingPlan) {
      addItem({
        title: `Mes ${mes}`,
        key,
      })
    }
    return () => {
      removeItem(key)
    }
  }, [addItem, removeItem, mes, plan, trainingPlan])

  return (
    <>
      <H2>Mes {mes}</H2>
      {children}
    </>
  )
}
