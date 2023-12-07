import { Button, Space } from "antd"
import Image from "next/image"
import React, { useState } from 'react'

export default function Counter() {
  const [value, setValue] = useState(0)

  const decrement = () => {
    if (value === 0) return
    setValue(value - 1)
  }
  const increment = () => {
    setValue(value + 1)
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <p>{value}</p>
      <Space>
        <Button onClick={() => decrement()}>
          <Image src="plus.svg" alt="plus icon"  />
        </Button>
        <Button onClick={() => increment()}>➕</Button>
      </Space>
    </div>
  )
}
