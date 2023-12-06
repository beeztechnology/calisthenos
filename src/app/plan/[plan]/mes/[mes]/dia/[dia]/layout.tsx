import H3 from "@/app/components/Atom/H3"
import React from 'react'

type LayoutProps = React.PropsWithChildren & {
  params: { dia: string }
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <>
      <H3>Día {params.dia}</H3>
      {children}
    </>
  )
}
