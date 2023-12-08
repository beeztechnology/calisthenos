'use client'
import { TrainingPlan } from "@/app/types/training-plan"
import useTrainingPlan from "@/hooks/useTrainingPlan"
import { useBreadcrumbStore } from "@/store/breadcrumb.store"
import { Segmented } from "antd"
import { SegmentedLabeledOption } from "antd/es/segmented"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Key, useCallback, useEffect, useState } from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { dia: string, plan: string, mes: string }
}

export default function Layout({ children, params: { plan, mes, dia } }: LayoutProps) {
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
    const key: Key = 4
    if (trainingPlan) {
      const planificacion = trainingPlan.planificacion.find(plan => plan.month === Number(mes))
      const _days: SegmentedLabeledOption[] = []
      planificacion?.routine.forEach((_, i) => {
        _days.push({
          label: <Link href={getNewPath(`${i + 1}`)}>{DIA} {i + 1}</Link>,
          value: `${DIA} ${i + 1}`
        })
      })
      setDays(_days)
      addItem({
        title: `Dia ${dia}`,
        key,
        href: `/plan/${plan}/mes/${mes}/dia/${dia}`,
      })
    }
    return () => {
      removeItem(key)
    }
  }, [mes, dia, plan, getNewPath, trainingPlan, addItem, removeItem])

  return (
    <>
      <Segmented className="[&.ant-segmented]:mb-6" options={days} defaultValue={`${DIA} ${dia}`} />
      {children}
    </>
  )
}
