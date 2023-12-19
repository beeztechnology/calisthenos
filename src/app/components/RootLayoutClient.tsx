'use client'
import { useBreadcrumbStore } from "@/store/useBreadcrumbStore"
import { HomeOutlined } from "@ant-design/icons"
import { useEffect } from 'react'

export default function RootLayoutClient() {
  const addItem = useBreadcrumbStore((state) => state.addItem)

  useEffect(() => {
    addItem({
      title: <HomeOutlined />,
      key: 'home',
      href: '/'
    })
  }, [addItem])

  return <></>
}
