'use client'
import { HomeOutlined } from "@ant-design/icons"
import React, { useEffect } from 'react'
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import { usePathname } from "next/navigation"

export default function RootLayoutClient() {
  const addItem = useBreadcrumbStore((state) => state.addItem)
  const currentPath = usePathname()

  useEffect(() => {
    addItem({
      title: <HomeOutlined />,
      key: 'home',
      href: '/'
    })
  }, [addItem])

  return (
    <></>
  )
}
