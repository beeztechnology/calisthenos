import H3 from "@/app/components/Atom/H3"
import React from 'react'

type layoutProps = React.PropsWithChildren & {
  params: { dia: string }
}

export default function layout({ children, params }: layoutProps) {
  const title = "Sin equipamiento"

  return (
    <>
      <H3>Día {params.dia}</H3>
      {children}
    </>
  )
}
