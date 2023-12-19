import cn from "classnames";
import React from 'react'

interface H2Props {
  noMargin?: boolean;
}

export default function H2({ children, noMargin }: H2Props & React.PropsWithChildren) {
  return (
    <h2 className={cn("text-4xl font-black", { "mb-6": !noMargin })}>{children}</h2>
  )
}
