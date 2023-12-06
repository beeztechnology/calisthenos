'use client'
import type { AMRAP, Descanso, EMOM, Exercise, Range, Fixed, Letter, Repeticion, Routine, Serie, Tempo, Piramide, WithTime } from "@/app/types";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";

type BloqueExercise = {
  key: string;
  series: string;
  descanso: string;
  tempo: string;
  repes: string;
  ejercicio: string;
} & Pick<Exercise, 'intensidad'>

interface RoutingTableProps {
  routine: Routine;
  day: number;
  label: string;
}

export default function RoutineTable({ routine, day, label }: RoutingTableProps) {
  const columns = [
    {
      key: "key",
      label: "BLOQUE",
    },
    {
      key: "ejercicio",
      label: "EJERCICIO",
    },
    {
      key: "intensidad",
      label: "INTENSIDAD",
    },
    {
      key: "series",
      label: "SERIES",
    },
    {
      key: "repes",
      label: "REPES",
    },
    {
      key: "tempo",
      label: "TEMPO",
    },
    {
      key: "descanso",
      label: "DESCANSO",
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

  const bloqueExercises: BloqueExercise[] = [];
  for (let i = 0; i < routine.length; i++) {
    const bloque = routine[i];
    for (let j = 0; j < bloque.ejercicios.length; j++) {
      const exercise = bloque.ejercicios[j]
      let key = String.fromCharCode(97 + i).toUpperCase();
      if (bloque.ejercicios.length > 1) {
        key = `${key}~${j + 1}`
      }
      const ejercicio: BloqueExercise = {
        ejercicio: exercise.name,
        intensidad: exercise.intensidad,
        tempo: renderTempo(exercise.tempo),
        repes: renderRepes(exercise.repes),
        key,
        series: renderSeries(bloque.series),
        descanso: renderDescanso(bloque.descanso)
      };
      bloqueExercises.push(ejercicio)
    }
  }

  return (
    <Table isStriped aria-label={label}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={bloqueExercises}>
        {(bloque) => (
          <TableRow key={bloque.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(bloque, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
