'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Planificacion } from "../types/training-plan";

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
            <Link className="py-2 pr-2 link" href={`${currentPath}/dia/${day}`}>Día {day}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
