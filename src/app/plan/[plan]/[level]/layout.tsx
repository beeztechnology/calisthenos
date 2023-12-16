'use client'
import H2 from "@/app/components/Atom/H2"
import { Level } from "@/app/types/level"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import React, { Key, useCallback, useEffect } from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { plan: string, level: string, }
}

export default function Layout({ children, params: { plan, level } }: LayoutProps) {
  const { trainingPlan } = useTrainingPlan()
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))

  const getLevel = useCallback(() => {
    return Object.values(Level).find(lvl => lvl.slug === level)?.value
  }, [level])

  useEffect(() => {
    const key: Key = 3
    if (trainingPlan) {
      addItem({
        title: getLevel(),
        key,
      })
    }
    return () => {
      removeItem(key)
    }
  }, [addItem, removeItem, trainingPlan, getLevel])

  return (
    <>
      <H2>{getLevel()}</H2>
      {children}
    </>
  )
}
