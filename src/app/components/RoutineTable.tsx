'use client'
import type { IBloque, IExercise, Routine, Serie } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { renderTime } from "@/utils/render";
import { Space, Table, TableColumnsType } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { ExpandableConfig } from "antd/es/table/interface";
import { Key, ReactElement } from "react";
import { Descanso } from "../types/descanso";
import { Range } from "../types/range";
import { Repeticion } from "../types/reps";
import { Tempo } from "../types/tempo";
import { AMRAP, EMOM, NEVER, OPTIONAL, Piramide, WithCadaLado, WithTime } from "../types/utilities";
import Countdown from "./Countdown";
import Counter from "./Counter";

type RowExercise = Pick<IExercise, 'intensidad' | 'tempo' | 'repes'> & {
  key: Key,
  ejercicio: string;
}

type RowBloque = {
  key: string;
  bloque: Element | ReactElement | string;
  exercises: RowExercise[];
} & Pick<IBloque, 'series' | 'descanso'>

interface RoutingTableProps {
  routine: Routine;
}

export default function RoutineTable({ routine }: RoutingTableProps) {
  const columns: ColumnsType<RowBloque> = [
    {
      title: "BLOQUE",
      dataIndex: "bloque",
      align: 'center',
      render: (value) => {
        return <Space>
          {/* <Checkbox /> */}
          {value}
        </Space>
      }
    },
    {
      title: "SERIES",
      dataIndex: "series",
      align: 'center',
      render: (value) => renderSeries(value)
    },
    {
      title: "DESCANSO",
      dataIndex: "descanso",
      align: 'center',
      render: (value) => renderDescanso(value)
    },
  ];

  const renderRange = (R: WithTime<Range<OPTIONAL>, OPTIONAL>): string => {
    let minString = R.range[0].toString()
    let maxString = R.range[1]?.toString()
    if (isRangeTime(R)) {
      minString = renderTime(R.range[0])
      if (R.range.length === 2) {
        maxString = renderTime(R.range[1])
      }
    }
    if (R.range.length === 1) {
      return minString
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

  const isFixed = (item: unknown): item is Range<NEVER> => {
    if (typeof item !== 'object') return false;
    return (item as Range<NEVER>).range.length === 1
  }

  const isFixedTime = (item: unknown): item is WithTime<Range<NEVER>> => {
    if (!isFixed(item)) return false;
    return (item as WithTime<Range<NEVER>>).isTime
  }

  const isRange = (item: unknown): item is Range<OPTIONAL> => {
    if (typeof item !== 'object') return false;
    return !!(item as Range<OPTIONAL>).range
  }

  const isRangeTime = (item: unknown): item is WithTime<Range<OPTIONAL>> => {
    if (!isRange(item)) return false;
    return (item as WithTime<Range>).isTime
  }

  const renderSeries = (serie: Serie): string | ReactElement => {
    if (isAMRAP(serie)) return <p className="text-lg">{serie.amrap}&apos; AMRAP</p>
    if (isEMOM(serie)) return <p className="text-lg">{serie.emom}&apos; EMOM</p>
    if (isRange(serie) || isFixed(serie)) {
      const series = renderRange(serie)
      return (
        <div className="flex flex-col gap-3">
          <p className="text-lg">{series}</p>
          <p><strong><em>Finalizadas</em></strong></p>
          <Counter max={serie.range[serie.range.length - 1]} />
        </div>
      )
    }
    return serie
  }

  const renderDescanso = (descanso: Descanso): string | ReactElement => {
    if (isRangeTime(descanso)) return (
      <>
        {!!descanso.range[1] && renderRange(descanso)}
        <Countdown defaultValue={descanso.range[1] ?? descanso.range[0]} />
      </>
    )
    return (
      <>
        {descanso}
        <Countdown />
      </>
    )
  }

  const renderTempo = (tempo?: Tempo): string => {
    if (!tempo) return Tempo.UNDEFINED
    if (isRange(tempo)) return renderRange(tempo)
    return tempo;
  }

  const isPiramide = (reps: unknown): reps is Piramide => {
    return !!(reps as Piramide).piramide
  }

  const isCadaLado = (reps: unknown): reps is WithCadaLado<object> => {
    return !!(reps as WithCadaLado<object>).cadaLado
  }

  const renderRepes = (reps: Repeticion): string => {
    if (!reps) return '-'
    if (isPiramide(reps)) {
      return reps.piramide.reduce((prev, curr, index) => {
        if (index === 0) return `${curr}`
        return `${prev} + ${curr}`
      }, '')
    }
    if (isRange(reps) || isFixed(reps)) {
      let res = ''
      if (isRange(reps)) {
        res = renderRange(reps)
        if (isCadaLado(reps)) {
          res += ' (c/lado)'
        }
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

  const data: RowBloque[] = [];
  for (let i = 0; i < routine.length; i++) {
    const bloque = routine[i];
    const ejercicios = bloque.ejercicios;
    const N = ejercicios.length;
    const rowBloque: RowBloque = {
      bloque: getBloqueId(i),
      key: bloque.id,
      series: bloque.series,
      descanso: bloque.descanso,
      exercises: [],
    }
    for (let j = 0; j < N; j++) {
      const exercise = ejercicios[j]
      rowBloque.exercises.push(
        {
          key: randomId(),
          ejercicio: exercise.name,
          intensidad: exercise.intensidad || '-',
          tempo: exercise.tempo,
          repes: exercise.repes,
        }
      )
    }
    data.push(rowBloque)
  }

  const expandedRowRender: ExpandableConfig<RowBloque>['expandedRowRender'] = (bloque) => {
    const COLUMN = {
      EJERCICIO: 'ejercicio',
      INTENSIDAD: 'intensidad',
      REPES: 'repes',
      TEMPO: 'tempo',
    }
    const columns: TableColumnsType<RowExercise> = [
      { title: COLUMN.EJERCICIO.toUpperCase(), dataIndex: COLUMN.EJERCICIO, key: COLUMN.EJERCICIO },
      { title: COLUMN.INTENSIDAD.toUpperCase(), dataIndex: COLUMN.INTENSIDAD, key: COLUMN.INTENSIDAD },
      {
        title: COLUMN.REPES.toUpperCase(),
        dataIndex: COLUMN.REPES,
        key: COLUMN.REPES,
        render: (value) => renderRepes(value)
      },
      { title: COLUMN.TEMPO.toUpperCase(), dataIndex: COLUMN.TEMPO, key: COLUMN.TEMPO },
    ];

    return <Table columns={columns} dataSource={bloque.exercises} pagination={false} />;
  };

  return (
    <div className="overflow-x-auto">
      <Table columns={columns}
        rowSelection={{}}
        expandable={{ expandedRowRender }}
        dataSource={data} pagination={false} />
    </div>
  )
}
