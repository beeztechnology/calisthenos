'use client'
import RoutineTable from "@/app/components/RoutineTable";
import { Routine } from "@/app/types";
import { SIN_EQUIPAMIENTO } from "@/db/constants.db";
import useTrainingPlan from "@/hooks/useTrainingPlan";

interface pageProps {
  params: {
    mes: string;
    dia: string;
  }
}

export default function Dia({ params }: pageProps) {
  const { trainingPlan } = useTrainingPlan(SIN_EQUIPAMIENTO)
  const mes = Number(params.mes)
  const dia = Number(params.dia)

  const routineList: Routine[] = trainingPlan?.planificacion.find(routine => routine.month === mes)?.routine || []
  let routine: Routine | undefined = undefined;
  if (routineList.length > 0 && dia - 1 < routineList.length) {
    routine = routineList[dia - 1]
  }

  if (routine) {
    return <RoutineTable day={dia} routine={routine} label={`Rutina dia ${dia} del mes ${mes}`} />
  }
  return <></>
}
