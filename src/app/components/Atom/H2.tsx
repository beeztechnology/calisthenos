import { cn } from "@nextui-org/react";
import React from 'react'

interface H2Props {
  noMargin?: boolean;
}

export default function H2({ children, noMargin }: H2Props & React.PropsWithChildren) {
  return (
    <h2 className={cn("text-4xl font-black", !noMargin && "mb-6")}>{children}</h2>
  )
}
