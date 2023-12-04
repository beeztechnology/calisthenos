import H1 from "@/app/components/Atom/H1"
import React from 'react'

export default function layout({ children }: React.PropsWithChildren) {
  const title = "Sin equipamiento"

  return (
    <>
      <H1>Plan de entrenamiento:<br />{title}</H1>
      {children}
    </>
  )
}
