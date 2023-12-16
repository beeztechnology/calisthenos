'use client'
import useTrainingPlan from "@/hooks/useTrainingPlan"

import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import { Segmented } from "antd"
import { SegmentedLabeledOption } from "antd/es/segmented"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Key, useCallback, useEffect, useState } from 'react'
import './layout.css';

type LayoutProps = React.PropsWithChildren & {
  params: { plan: string, level: string, mes: string, dia: string }
}

export default function Layout({ children, params: { plan, level, mes, dia } }: LayoutProps) {
  const { trainingPlan } = useTrainingPlan()
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))
  const [days, setDays] = useState<SegmentedLabeledOption[]>([])
  const currentPath = usePathname()
  const DIA = 'Día'

  const getNewPath = useCallback((day: string) => {
    return currentPath.replace(/\d+$/, day)
  }, [currentPath])

  useEffect(() => {
    const key: Key = 5
    if (trainingPlan) {
      const planificacion = trainingPlan?.planificacion.find(plan => plan.month === Number(mes) && plan.level.slug === level)
      const _days: SegmentedLabeledOption[] = []
      planificacion?.routine.forEach((_, i) => {
        _days.push({
          label: <Link className="py-1 px-4" href={getNewPath(`${i + 1}`)}>{DIA} {i + 1}</Link>,
          value: `${DIA} ${i + 1}`,
        })
      })
      setDays(_days)
      addItem({
        title: `Dia ${dia}`,
        key,
      })
    }
    return () => {
      removeItem(key)
    }
  }, [plan, level, mes, dia, getNewPath, trainingPlan, addItem, removeItem])

  return (
    <>
      <Segmented options={days} defaultValue={`${DIA} ${dia}`} />
      {children}
    </>
  )
}
