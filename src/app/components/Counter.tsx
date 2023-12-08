import { Button, Space } from "antd"
import React, { useState } from 'react'
import MyImage from '@/app/components/MyImage';

interface CounterProps {
  max?: number;
}

const useCounter = (max?: number) => {
  const [value, setValue] = useState(0)

  const decrement = () => {
    if (value === 0) return
    setValue(value - 1)
  }
  const increment = () => {
    const newValue = value + 1
    if (max && newValue > max) return
    setValue(newValue)
  }

  return {
    value,
    increment,
    decrement
  }
}

export default function Counter({ max }: CounterProps) {
  const { value, increment, decrement } = useCounter(max)

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
