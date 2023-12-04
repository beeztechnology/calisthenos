import React from 'react'

export default function H1({ children }: React.PropsWithChildren) {
  return (
    <h1 className="text-5xl font-black mb-8">{children}</h1>
  )
}
