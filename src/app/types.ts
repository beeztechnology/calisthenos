export type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type Autodefinido = 'Autodefinido';
export type Controlado = 'Controlado';
export type Isometrico = 'Isométrico';
export type Rapido = 'Rápido';
export type Explosivo = 'Explosivo';
export type RepeticionMaxima = 'MAX';
export type ArrayMinOne<T> = [T, ...T[]]

export type Time = {
  minutes?: number;
  seconds?: number;
}
export type AMRAP = {
  amrap: Time;
}
export type EMOM = {
  emom: Time;
}
export type Interval<T extends number | Time = number> = {
  min: T;
  max: T;
}
export type IntervalFixed<T extends number | Time = number> = {
  value: T;
}

export type Serie = Interval | AMRAP | EMOM | Autodefinido;
export type Repeticion = (Interval | IntervalFixed<number> | Interval<Time> | IntervalFixed<Time>) & { cadaLado?: boolean; } | number[] | RepeticionMaxima;

export type TempoUndefined = '-';
export type UnitTempo = number | 'X' | TempoUndefined;
export type TempoString = `${UnitTempo}${UnitTempo}${UnitTempo}${UnitTempo}` | Controlado | Isometrico | Rapido | Explosivo
export type Tempo =  Interval | TempoString | TempoUndefined;
export type Descanso = Interval<Time> | Time | Autodefinido;

export interface Exercise {
  name: string;
  description?: string;
  intensidad?: string;
  repes: Repeticion;
  tempo?: Tempo;
}

export interface Bloque {
  key: Letter;
  series: Serie;
  ejercicios: ArrayMinOne<Exercise>;
  descanso: Descanso;
}

export type Routine = Bloque[];

export type Level = 'Principiante' | 'Intermedio' | 'Avanzado' | 'Experto';

export interface Planificacion {
  id: string;
  month: number;
  link: string;
  level: Level;
  routine: Routine[];
}