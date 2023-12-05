'use client'
import RoutineTable from "@/app/components/RoutineTable";
import { Routine } from "@/app/types";
import { SIN_EQUIPAMIENTO } from "@/db/constants.db";
import useTrainingPlan from "@/hooks/useTrainingPlan";
import { useEffect, useState } from "react";

interface pageProps {
  params: {
    mes: string;
    dia: string;
  }
}

export default function Dia({ params }: pageProps) {
  const [routine, setRoutine] = useState<Routine | undefined>(undefined)
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO)
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
