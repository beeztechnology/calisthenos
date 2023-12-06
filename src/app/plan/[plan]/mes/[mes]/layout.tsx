import H2 from "@/app/components/Atom/H2"
import React from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { mes: string }
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <>
      <H2>Mes {params.mes}</H2>
      {children}
    </>
  )
}
