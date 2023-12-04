import { cn } from "@nextui-org/react";
import React from 'react'

interface H3Props {
  noMargin?: boolean;
}

export default function H3({ children, noMargin }: H3Props & React.PropsWithChildren) {
  return (
    <h2 className={cn("text-3xl font-black", !noMargin && "mb-6")}>{children}</h2>
  )
}
