import RoutineTable from "@/app/components/RoutineTable";
import { plan } from "@/app/plan/sin-equipamiento/plan.db";
import { Routine } from "@/app/types";

interface pageProps {
  params: {
    mes: string;
    dia: string;
  }
}

export default function page({ params }: pageProps) {
  const mes = Number(params.mes)
  const dia = Number(params.dia)

  const routineList: Routine[] = plan.find(routine => routine.month === mes)?.routine || []
  let routine: Routine | undefined = undefined;
  if (routineList.length > 0 && dia - 1 < routineList.length) {
    routine = routineList[dia - 1]
  }

  return (
    <>
      {routine && (
        <RoutineTable day={dia} routine={routine} label={`Rutina dia ${dia} del mes ${mes}`} />
      )}
    </>
  )
}
