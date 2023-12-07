'use client'
import type { AMRAP, Bloque, Descanso, EMOM, Exercise, Fixed, Piramide, Range, Repeticion, Routine, Serie, Tempo, WithTime } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { renderTime } from "@/utils/render";
import { Checkbox, Space, Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { ReactElement } from "react";
import Countdown from "./Countdown";
import Counter from "./Counter";

type BloqueExercise = {
  key: string;
  bloque: Element | ReactElement | string;
  ejercicio: string;
  rowSpan: number;
} & Pick<Exercise, 'intensidad' | 'tempo' | 'repes'> & Pick<Bloque, 'series' | 'descanso'>

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
      align: 'center',
      onCell: sharedOnCell,
      render: (value) => {
        return <Space>
          <Checkbox />
          {value}
        </Space>
      }
    },
    {
      title: "EJERCICIO",
      dataIndex: "ejercicio",
    },
    {
      title: "INTENSIDAD",
      dataIndex: "intensidad",
      align: 'center',
    },
    {
      title: "SERIES",
      dataIndex: "series",
      align: 'center',
      onCell: sharedOnCell,
      render: (value) => renderSeries(value)
    },
    {
      title: "SERIES COMPLETADAS",
      dataIndex: "done",
      align: 'center',
      onCell: sharedOnCell,
      render: (_, record) => {
        if (isEMOM(record.series) || isAMRAP(record.series)) {
          return <>-</>
        }
        return <Counter />
      }
    },
    {
      title: "REPES",
      dataIndex: "repes",
      align: 'center',
      render: (value) => renderRepes(value)
    },
    {
      title: "TEMPO",
      dataIndex: "tempo",
      align: 'center',
      render: (value) => renderTempo(value)
    },
    {
      title: "DESCANSO",
      dataIndex: "descanso",
      onCell: sharedOnCell,
      align: 'center',
      render: (value) => renderDescanso(value)
    },
  ];

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

  const renderDescanso = (descanso: Descanso): string | ReactElement => {
    if (isRangeTime(descanso)) return (
      <>
        {renderRange(descanso)}
        <Countdown defaultValue={descanso.range[1]} />
      </>
    )
    if (isFixedTime(descanso)) return (
      <Countdown defaultValue={descanso.fixed} />
    )
    return (
      <>
        {descanso}
        <Countdown />
      </>
    )
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

  const getBloqueId = (number: number) => {
    return String.fromCharCode(97 + number).toUpperCase()
  }

  const getRowSpan = (exercisesSize: number, exercise_index: number) => {
    let rowSpan = 1;
    if (exercisesSize > 1) {
      if (exercise_index === 0) {
        rowSpan = exercisesSize;
      } else {
        rowSpan = 0;
      }
    }
    return rowSpan;
  }

  const data: BloqueExercise[] = [];
  for (let i = 0; i < routine.length; i++) {
    const bloque = routine[i];
    const ejercicios = bloque.ejercicios;
    const N = ejercicios.length;
    for (let j = 0; j < N; j++) {
      const exercise = ejercicios[j]
      const ejercicio: BloqueExercise = {
        ejercicio: exercise.name,
        intensidad: exercise.intensidad || '-',
        tempo: exercise.tempo,
        repes: exercise.repes,
        bloque: getBloqueId(i),
        key: bloque.id,
        series: bloque.series,
        descanso: bloque.descanso,
        rowSpan: getRowSpan(N, j),
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
