'use client'
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface MonthContentProps {
  planificacion: Planificacion;
}

export default function MonthContent({ planificacion }: MonthContentProps) {
  const currentPath = usePathname()
  const getDays = () => {
    const out = []
    for (let i = 1; i <= planificacion.routine.length; i++) {
      out.push(i)
    }
    return out
  }

  return (
    <div>
      <ol className="list-disc ml-8">
        {getDays().map(day => (
          <li key={day}>
            <Link href={`${currentPath}/dia/${day}`}>Día {day}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
