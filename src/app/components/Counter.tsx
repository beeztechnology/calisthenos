import { Button, Space } from "antd"
import React, { useEffect, useState } from 'react'
import MyImage from '@/app/components/MyImage';

interface CounterProps {
  max?: number;
  onChange?: (value: number) => void;
}

const useCounter = (max?: number) => {
  const [value, setValue] = useState(0)

  const isMin = value <= 0

  const isMax = !!max && value >= max

  const decrement = () => {
    if (isMin) return
    setValue(value - 1)
  }
  const increment = () => {
    if (isMax) return
    setValue(value + 1)
  }

  return {
    value,
    increment,
    decrement,
    isMin,
    isMax,
  }
}

export default function Counter({ max, onChange }: CounterProps) {
  const { value, increment, decrement, isMin, isMax } = useCounter(max)

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange])

  return (
    <div className="flex flex-col gap-2 items-center">
      <Space>
        <Button disabled={isMin} onClick={decrement}>
          <MyImage src="/minus.svg" alt="plus icon" />
        </Button>
        <p>{value}</p>
        <Button disabled={isMax} onClick={increment}>
          <MyImage src="/plus.svg" alt="plus icon" />
        </Button>
      </Space>
    </div>
  )
}
