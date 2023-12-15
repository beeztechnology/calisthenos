'use client'
import type { IBloque, IExercise, Routine, ISerie } from "@/app/types/training-plan";
import { randomId } from "@/utils/random";
import { renderTime } from "@/utils/render";
import { Badge, Space, Table, TableColumnsType } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { ExpandableConfig } from "antd/es/table/interface";
import { Key, ReactElement, useState } from "react";
import { Descanso } from "../../types/descanso";
import { Range } from "../../types/range";
import { Repeticion } from "../../types/reps";
import { AMRAP, EMOM, OPTIONAL, WithTime } from "../../types/utilities";
import Countdown from "../Countdown";
import Counter from "../Counter";
import { isCadaLado, isFixed, isPiramide, isRange, isRangeTime } from "./isType";

type RowExercise = Pick<IExercise, 'intensidad' | 'tempo' | 'repes'> & {
  key: Key,
  ejercicio: string;
}

type RowBloque = {
  key: string;
  bloque: Element | ReactElement | string;
  exercises: RowExercise[];
} & Pick<IBloque, 'series' | 'descanso'>

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

const Serie = ({ value }: { value: ISerie }) => {
  const [current, setCurrent] = useState(0);

  const isAMRAP = (serie: ISerie): serie is AMRAP => {
    if (typeof serie !== 'object') return false;
    return !!(serie as AMRAP).amrap
  }

  const isEMOM = (serie: ISerie): serie is EMOM => {
    if (typeof serie !== 'object') return false;
    return !!(serie as EMOM).emom
  }

  if (isAMRAP(value)) {
    return <>
      <p className="text-lg font-bold"><em>AMRAP</em></p>
      <Countdown max={value.amrap * 60} defaultValue={value.amrap * 60} />
    </>
  }
  if (isEMOM(value)) {
    return <>
      <p className="text-lg font-bold"><em>EMOM</em></p>
      <Countdown max={value.emom * 60} defaultValue={value.emom * 60} />
    </>
  }
  if (isRange(value) || isFixed(value)) {
    const series = renderRange(value)
    const max = value.range[value.range.length - 1];
    return (
      <div className="flex flex-col gap-3 items-center">
        <p className="text-2xl">{series}</p>
        {current === max
          ? <Badge status="success" text="Finalizado" />
          : <Badge status="processing" text="En progreso" />
        }
        <Counter
          max={max}
          onChange={(value) => { setCurrent(value) }}
        />
      </div>
    )
  }
  return value
}

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
      render: (value) => <Serie value={value} />
    },
    {
      title: "DESCANSO",
      dataIndex: "descanso",
      align: 'center',
      render: (value) => renderDescanso(value)
    },
  ];

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
