import { renderTime } from "@/utils/render";
import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useEffect, useState } from 'react';
import MyImage from "./Image";

interface CountdownProps {
  defaultValue?: number;
}

function useValue(defaultValue: number) {
  const [value, setValue] = useState(defaultValue)

  const increment = (valueToincrement: number) => {
    setNewValue(value + valueToincrement)
  }

  const decrement = (valueToDecrement: number) => {
    setNewValue(value - valueToDecrement)
  }

  const setNewValue = (newValue: number) => {
    if (newValue >= 0 && newValue <= 300) {
      setValue(newValue)
    }
  }

  return {
    value,
    increment,
    decrement,
    setValue: setNewValue
  }
}

export default function Countdown({ defaultValue = 210 }: CountdownProps) {
  const { value, increment, decrement, setValue } = useValue(defaultValue)
  const [started, setStarted] = useState(false)
  const incDecValue = 30

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (started && value > 0) {
      intervalId = setTimeout(() => {
        setValue(value - 1)
      }, 1000);
    }
    return () => clearTimeout(intervalId)
  }, [started, value, setValue])

  return (
    <div className="flex flex-col items-center gap-2">
      <Paragraph className="text-2xl mb-0">{renderTime(value)}</Paragraph>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center">
          <Button onClick={() => decrement(incDecValue)}>
            -{incDecValue}s
          </Button>
          <Button onClick={() => increment(incDecValue)}>
            +{incDecValue}s
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <Button onClick={() => setStarted(true)}>
            <MyImage src="/play.svg" alt="play icon" />
          </Button>
          <Button onClick={() => { setStarted(false); setValue(defaultValue) }}>
            <MyImage src="/square.svg" alt="stop icon" />
          </Button>
          <Button onClick={() => setValue(defaultValue)}>
            <MyImage src="/repeat.svg" alt="repeat icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}
