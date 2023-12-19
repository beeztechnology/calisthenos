import cn from "classnames";
import React from 'react'

interface H3Props {
  noMargin?: boolean;
}

export default function H3({ children, noMargin }: H3Props & React.PropsWithChildren) {
  return (
    <h2 className={cn("text-3xl font-black", { "mb-6": !noMargin })}>{children}</h2>
  )
}
