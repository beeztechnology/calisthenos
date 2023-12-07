import { renderTime } from "@/utils/render";
import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import { useEffect, useState } from 'react';

interface CountdownProps {
  initialValue?: number;
}

export default function Countdown({ initialValue = 300 }: CountdownProps) {
  const [value, setValue] = useState(initialValue)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (started && value > 0) {
      intervalId = setTimeout(() => {
        setValue(value - 1)
      }, 1000);
    }
    return () => clearTimeout(intervalId)
  }, [started, value])

  return (
    <div className="flex flex-col items-center gap-2">
      <Paragraph className="text-2xl mb-0">{renderTime(value)}</Paragraph>

      <div className="flex gap-2">
        <Button onClick={() => setStarted(true)}>
          <Image src="/play.svg" alt="play icon" layout="fill" objectFit="contain" className="p-2" />
        </Button>
        <Button onClick={() => { setStarted(false); setValue(initialValue) }}>
          <Image src="/square.svg" alt="stop icon" layout="fill" objectFit="contain" className="p-2" />
        </Button>
        <Button onClick={() => setValue(initialValue)}>
          <Image src="/repeat.svg" alt="repeat icon" layout="fill" objectFit="contain" className="p-2" />
        </Button>
      </div>
    </div>
  )
}
