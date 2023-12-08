'use client'
import { LazyProps } from "framer-motion"
import React, { Key, useEffect } from 'react'
import H1 from "../components/Atom/H1"
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"

type LayoutProps = {

} & React.PropsWithChildren

export default function Layout({ children }: LazyProps) {
  const { addItem, removeItem } = useBreadcrumbStore(({ addItem, removeItem }) => ({
    addItem, removeItem
  }))

  useEffect(() => {
    const key: Key = 1
      addItem({
        title: 'Planes',
        key,
        href: `/plan`,
      })
    return () => {
      removeItem(key)
    }
  }, [addItem, removeItem])

  return (
    <>
      <H1>Planes de entrenamiento</H1>
      {children}
    </>
  )
}
