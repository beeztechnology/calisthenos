'use client'
import type { AMRAP, Descanso, EMOM, Exercise, Interval, IntervalFixed, Letter, Repeticion, Routine, Serie, Tempo, Time } from "@/app/types";
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

  const isTime = (item: Descanso | Time | number): item is Time => {
    if (typeof item === 'object') {
      if ((item as Time).minutes || (item as Time).seconds) {
        return true
      }
    }
    return false;
  }

  const timeToString = (time: Time): string => {
    const seconds = time.seconds || '00';
    let minutes ='';
    if (time.minutes) {
      minutes = time.minutes + "'"
    }
    return `${minutes}${seconds}"`
  }

  const intervalToString = <T extends number | Time>(interval: Interval<T>): string => {
    let minString = '', maxString = ''
    if (isIntervalTime(interval)) {
      minString = timeToString(interval.min)
      maxString = timeToString(interval.max)
    } else {
      minString = interval.min.toString()
      maxString = interval.max.toString()
    }
    return `${minString} - ${maxString}`
  }

  const isAMRAP = (serie: Serie): serie is AMRAP => {
    if (typeof serie === 'object') {
      if ((serie as AMRAP).amrap) {
        return true
      }
    }
    return false;
  }

  const isEMOM = (serie: Serie): serie is EMOM => {
    if (typeof serie === 'object') {
      if ((serie as EMOM).emom) {
        return true
      }
    }
    return false;
  }

  const isIntervalFixed = <T extends number | Time>(item: unknown): item is IntervalFixed<T> => {
    if (typeof item === 'object') {
      if ((item as IntervalFixed<T>).value) {
        return true
      }
    }
    return false;
  }

  const isInterval = <T extends number | Time>(item: unknown): item is Interval<T> => {
    if (typeof item === 'object') {
      if ((item as Interval<T>).min) {
        return true
      }
    }
    return false;
  }

  const isIntervalNumber = (item: Serie | Tempo | Repeticion): item is Interval<number> => {
    if (typeof item === 'object') {
      const itemInt = item as Interval;
      if (typeof itemInt.min === 'number') {
        return true
      }
    }
    return false;
  }

  const isIntervalTime = <T extends number | Time>(item: Descanso | Interval<T> | Repeticion): item is Interval<Time> => {
    if (typeof item === 'object') {
      if (isTime((item as Interval<Time>).min)) {
        return true
      }
    }
    return false;
  }

  const seriesToString = (serie: Serie): string => {
    if (isAMRAP(serie)) {
      return `${serie.amrap}' AMRAP`
    }
    if (isEMOM(serie)) {
      return `${serie.emom}' EMOM`
    }
    if (isIntervalNumber(serie)) {
      return intervalToString(serie)
    }
    return serie
  }

  const descansoToString = (descanso: Descanso): string => {
    if (isIntervalTime(descanso)) {
      return intervalToString(descanso)
    }
    if (isTime(descanso)) {
      return timeToString(descanso)
    }
    return descanso
  }

  const isArray = (reps: Repeticion): reps is number[] => {
    return Array.isArray(reps)
  }

  const tempoToString = (tempo?: Tempo): string => {
    if (!tempo) return '-'
    if (isIntervalNumber(tempo)) {
      return intervalToString(tempo)
    }
    return tempo;
  }

  const repesToString = (reps: Repeticion): string => {
    if (isArray(reps)) {
      return reps.reduce((prev, curr, index) => {
        if (index === 0) {
          return `${curr}`
        }
        return `${prev}+${curr}`
      }, '')
    }
    if (isInterval(reps) || isIntervalFixed(reps)) {
      let res = ''
      if (isInterval(reps)) {
        // @ts-expect-error
        res = intervalToString(reps)
      } else {
        res = reps.value.toString()
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
      let key = bloque.key.toString();
      if (bloque.ejercicios.length > 1) {
        key = `${bloque.key}${j + 1}`
      }
      const ejercicio: BloqueExercise = {
        ejercicio: exercise.name,
        intensidad: exercise.intensidad,
        tempo: tempoToString(exercise.tempo),
        repes: repesToString(exercise.repes),
        key,
        series: seriesToString(bloque.series),
        descanso: descansoToString(bloque.descanso)
      };
      bloqueExercises.push(ejercicio)
    }
  }

  return (
    <Table aria-label={label}>
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
