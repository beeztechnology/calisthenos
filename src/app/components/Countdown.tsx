import { renderTime } from "@/utils/render";
import { Button, notification } from "antd";
import { useEffect, useState } from 'react';
import MyImage from "./MyImage";

interface CountdownProps {
  defaultValue?: number;
  max?: number;
}

function useValue(defaultValue: number, max: number) {
  const [value, setValue] = useState(defaultValue)

  const increment = (valueToincrement: number) => {
    setNewValue(value + valueToincrement)
  }

  const decrement = (valueToDecrement: number) => {
    setNewValue(value - valueToDecrement)
  }

  const setNewValue = (newValue: number) => {
    if (newValue >= 0 && newValue <= max) {
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

export default function Countdown({ defaultValue = 210, max = 300 }: CountdownProps) {
  const [api, contextHolder] = notification.useNotification();
  const { value, increment, decrement, setValue } = useValue(defaultValue, max)
  const [started, setStarted] = useState(false)
  const incDecValue = 30

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (started && value === 0) {
      setStarted(false)
      api.info({
        message: '¡Termino el tiempo!',
        duration: 30 * 1000
      });
    }
    if (started && value > 0) {
      timeoutId = setTimeout(() => {
        setValue(value - 1)
      }, 1000);
    }
    return () => clearTimeout(timeoutId)
  }, [started, value, setValue, api])

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
      {contextHolder}
      <p className="text-2xl">{renderTime(value)}</p>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center">
          <Button disabled={value <= 0} onClick={() => decrement(incDecValue)}>
            -{incDecValue}s
          </Button>
          <Button disabled={value >= max} onClick={() => increment(incDecValue)}>
            +{incDecValue}s
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <Button disabled={value <= 0} onClick={play}>
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
