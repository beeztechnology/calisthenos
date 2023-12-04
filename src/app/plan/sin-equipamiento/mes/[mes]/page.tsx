import H2 from "@/app/components/Atom/H2"
import MonthContent from "@/app/components/MonthContent"
import React from 'react'
import { plan } from '../../plan.db';

export default function Month({ params }: { params: { mes: string } }) {
  const mes = Number(params.mes)
  const getPlan = plan.find(el => el.month === mes)

  return (
    <>
      {getPlan && (
        <MonthContent planificacion={getPlan} />
      )}
    </>
  )
}
