import H1 from "@/app/components/Atom/H1"
import H2 from "@/app/components/Atom/H2"
import React from 'react'

type layoutProps = React.PropsWithChildren & {
  params: { mes: string }
}

export default function layout({ children, params }: layoutProps) {
  return (
    <>
      <H2>Mes {params.mes}</H2>
      {children}
    </>
  )
}
