'use client'
import type { AMRAP, Descanso, EMOM, Exercise, Fixed, Piramide, Range, Repeticion, Routine, Serie, Tempo, WithTime } from "@/app/types/training-plan";
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { ReactElement } from "react";

type BloqueExercise = {
  key: string;
  bloque: Element | ReactElement | string;
  series: string;
  descanso: string;
  tempo: string;
  repes: string;
  ejercicio: string;
  rowSpan: number;
} & Pick<Exercise, 'intensidad'>

interface RoutingTableProps {
  routine: Routine;
}

export default function RoutineTable({ routine }: RoutingTableProps) {
  const sharedOnCell = (data: BloqueExercise) => {
    return {
      rowSpan: data.rowSpan
    }
  }

  const columns: ColumnsType<BloqueExercise> = [
    {
      title: "BLOQUE",
      dataIndex: "bloque",
      onCell: sharedOnCell
    },
    {
      title: "EJERCICIO",
      dataIndex: "ejercicio",
    },
    {
      title: "INTENSIDAD",
      dataIndex: "intensidad",
    },
    {
      title: "SERIES",
      dataIndex: "series",
      onCell: sharedOnCell
    },
    {
      title: "REPES",
      dataIndex: "repes",
    },
    {
      title: "TEMPO",
      dataIndex: "tempo",
    },
    {
      title: "DESCANSO",
      dataIndex: "descanso",
      onCell: sharedOnCell
    },
  ];

  const renderTime = (time: number): string => {
    let seconds: string = (time % 60).toString()
    if (seconds === '0') {
      seconds = ''
    } else {
      seconds += '"'
    }
    const minutes: string = Math.floor(time / 60).toString();
    if (minutes === '0') {
      return seconds
    }
    return `${minutes}'${seconds}`
  }

  const renderRange = (R: Range | WithTime<Range>): string => {
    let minString = R.range[0].toString()
    let maxString = R.range[1].toString()
    if (isRangeTime(R)) {
      minString = renderTime(R.range[0])
      maxString = renderTime(R.range[1])
    }
    return `${minString} - ${maxString}`
  }

  const isAMRAP = (serie: Serie): serie is AMRAP => {
    if (typeof serie !== 'object') return false;
    return !!(serie as AMRAP).amrap
  }

  const isEMOM = (serie: Serie): serie is EMOM => {
    if (typeof serie !== 'object') return false;
    return !!(serie as EMOM).emom
  }

  const isFixed = (item: unknown): item is Fixed => {
    if (typeof item !== 'object') return false;
    return !!(item as Fixed).fixed
  }

  const isFixedTime = (item: unknown): item is WithTime<Fixed> => {
    if (!isFixed(item)) return false;
    return (item as WithTime<Fixed>).isTime
  }

  const isRange = (item: unknown): item is Range => {
    if (typeof item !== 'object') return false;
    return !!(item as Range).range
  }

  const isRangeTime = (item: unknown): item is WithTime<Range> => {
    if (!isRange(item)) return false;
    return (item as WithTime<Range>).isTime
  }

  const renderSeries = (serie: Serie): string => {
    if (isAMRAP(serie)) return `${serie.amrap}' AMRAP`
    if (isEMOM(serie)) return `${serie.emom}' EMOM`
    if (isRange(serie)) return renderRange(serie)
    return serie
  }

  const renderDescanso = (descanso: Descanso): string => {
    if (isRangeTime(descanso)) return renderRange(descanso)
    if (isFixedTime(descanso)) return renderTime(descanso.fixed)
    return descanso
  }

  const renderTempo = (tempo?: Tempo): string => {
    if (!tempo) return '-'
    if (isRange(tempo)) return renderRange(tempo)
    return tempo;
  }

  const isPiramide = (reps: Repeticion): reps is Piramide => {
    return !!(reps as Piramide).piramide
  }

  const renderRepes = (reps: Repeticion): string => {
    if (isPiramide(reps)) {
      return reps.piramide.reduce((prev, curr, index) => {
        if (index === 0) return `${curr}`
        return `${prev}+${curr}`
      }, '')
    }
    if (isRange(reps) || isFixed(reps)) {
      let res = ''
      if (isRange(reps)) {
        res = renderRange(reps)
      } else {
        res = reps.fixed.toString()
      }
      if (reps.cadaLado) {
        res += ' (c/lado)'
      }
      return res
    }
    return reps
  }

  const data: BloqueExercise[] = [];
  for (let i = 0; i < routine.length; i++) {
    const bloque = routine[i];
    const ejercicios = bloque.ejercicios;
    const N = ejercicios.length;
    for (let j = 0; j < N; j++) {
      const exercise = ejercicios[j]
      const keyString = String.fromCharCode(97 + i).toUpperCase();
      let rowSpan = 1;
      if (N > 1) {
        if (j === 0) {
          rowSpan = N;
        } else {
          rowSpan = 0;
        }
      }
      const ejercicio: BloqueExercise = {
        ejercicio: exercise.name,
        intensidad: exercise.intensidad,
        tempo: renderTempo(exercise.tempo),
        repes: renderRepes(exercise.repes),
        bloque: keyString,
        key: keyString + j,
        series: renderSeries(bloque.series),
        descanso: renderDescanso(bloque.descanso),
        rowSpan,
      };
      data.push(ejercicio)
    }
  }

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </div>
  )
}
