'use client'
import { TrainingPlan } from "@/app/types/training-plan"
import { Segmented } from "antd"
import { SegmentedLabeledOption } from "antd/es/segmented"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useCallback, useEffect, useState } from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { dia: string, plan: string, mes: string }
}

export default function Layout({ children, params: { plan, mes, dia } }: LayoutProps) {
  const [days, setDays] = useState<SegmentedLabeledOption[]>([])
  const currentPath = usePathname()
  const DIA = 'Día'

  const getNewPath = useCallback((day: string) => {
    return currentPath.replace(/\d+$/, day)
  }, [currentPath])

  useEffect(() => {
    fetch(`/api/plan/${plan}`)
      .then(res => res.json())
      .then((res: TrainingPlan) => {
        const plan = res.planificacion.find(plan => plan.month === Number(mes))
        const _days: SegmentedLabeledOption[] = []
        plan?.routine.forEach((_, i) => {
          _days.push({
            label: <Link href={getNewPath(`${i + 1}`)}>{DIA} {i + 1}</Link>,
            value: `${DIA} ${i + 1}`
          })
        })
        setDays(_days)
      })
  }, [currentPath, mes, dia, plan, getNewPath])

  return (
    <>
      <Segmented className="[&.ant-segmented]:mb-6" options={days} defaultValue={`${DIA} ${dia}`} />
      {children}
    </>
  )
}
