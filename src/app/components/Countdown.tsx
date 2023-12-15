import { renderTime } from "@/utils/render";
import { Button } from "antd";
import { useEffect, useState } from 'react';
import MyImage from "./MyImage";

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
    let timeoutId: NodeJS.Timeout;
    if (value === 0) {
      setStarted(false)
    }
    if (started && value > 0) {
      timeoutId = setTimeout(() => {
        setValue(value - 1)
      }, 1000);
    }
    return () => clearTimeout(timeoutId)
  }, [started, value, setValue])

  const play = () => {
    setStarted(true)
  }

  const reset = () => {
    setValue(defaultValue)
    setStarted(true)
  }

  const stop = () => {
    setValue(defaultValue)
    setStarted(false)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl">{renderTime(value)}</p>

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
          <Button onClick={play}>
            <MyImage src="/play.svg" alt="play icon" />
          </Button>
          <Button onClick={stop}>
            <MyImage src="/square.svg" alt="stop icon" />
          </Button>
          <Button onClick={reset}>
            <MyImage src="/repeat.svg" alt="repeat icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}
