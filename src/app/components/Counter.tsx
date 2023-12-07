import { Button, Space } from "antd"
import React, { useState } from 'react'
import MyImage from '@/app/components/Image';

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
      <Space>
        <Button onClick={() => decrement()}>
          <MyImage src="/minus.svg" alt="plus icon" />
        </Button>
        <p>{value}</p>
        <Button onClick={() => increment()}>
          <MyImage src="/plus.svg" alt="plus icon" />
        </Button>
      </Space>
    </div>
  )
}
