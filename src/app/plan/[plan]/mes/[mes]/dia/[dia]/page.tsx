'use client'
import RoutineTable from "@/app/components/RoutineTable";
import { Routine } from "@/app/types";
import { TrainingPlanContext } from "@/contexts/TrainingPlanContext";
import { useContext, useEffect, useState } from "react";

interface DiaPageProps {
  params: {
    mes: string;
    dia: string;
    plan: string;
  }
}

export default function DiaPage({ params }: DiaPageProps) {
  const [routine, setRoutine] = useState<Routine | undefined>(undefined)
  const trainingPlan = useContext(TrainingPlanContext)
  const mes = Number(params.mes)
  const dia = Number(params.dia)

  useEffect(() => {
    const list: Routine[] = trainingPlan?.planificacion.find(routine => routine.month === mes)?.routine || []
    if (list.length > 0 && dia - 1 < list.length) {
      setRoutine(list[dia - 1])
    }
  }, [trainingPlan?.planificacion, dia, mes])

  if (routine) {
    return <RoutineTable day={dia} routine={routine} label={`Rutina dia ${dia} del mes ${mes}`} />
  }
  return <></>
}
