'use client'
import RoutineTable from "@/app/components/RoutingTable";
import { Routine } from "@/app/types/training-plan";
import useTrainingPlan from "@/hooks/useTrainingPlan";
import { useEffect, useState } from "react";

interface DiaPageProps {
  params: {
    mes: string;
    dia: string;
    plan: string;
  }
}

export default function DiaPage({ params }: DiaPageProps) {
  const [routine, setRoutine] = useState<Routine>([])
  const { trainingPlan } = useTrainingPlan()
  const mes = Number(params.mes)
  const dia = Number(params.dia)

  useEffect(() => {
    const list: Routine[] = trainingPlan?.planificacion.find(routine => routine.month === mes)?.routine || []
    if (list.length > 0 && dia - 1 < list.length) {
      setRoutine(list[dia - 1])
    }
  }, [trainingPlan?.planificacion, dia, mes])

  return <RoutineTable routine={routine} />
}
