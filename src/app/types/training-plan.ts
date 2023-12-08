export const Level = {
  PRINCIPIANTE: 'Principiante',
  INTERMEDIO: 'Intermedio',
  AVANZADO: 'Avanzado',
  EXPERTO: 'Experto'
} as const
export type Level = typeof Level[keyof typeof Level];
export const Autodefinido = 'Autodefinido';
export const Controlado = 'Controlado';
export const Isometrico = 'Isométrico';
export const Rapido = 'Rápido';
export const Explosivo = 'Explosivo';
export const MAXIMO = 'MAXIMO';

export type AMRAP = {
  amrap: number;
}
export type EMOM = {
  emom: number;
}
export type Range = {
  range: [number, number];
}
export type Fixed = {
  fixed: number;
}
export type WithTime<T extends {}> = T & {
  isTime: true;
}

export type Serie = Range | Fixed | AMRAP | EMOM | typeof Autodefinido;
export type WithCadaLado<T extends {}> = T & {
  cadaLado?: boolean;
}
export type Piramide = {
  piramide: number[]
}
export type Repeticion = WithCadaLado<WithTime<Range> | Range | WithTime<Fixed> | Fixed> | Piramide | typeof MAXIMO;

export type TempoUndefined = '-';
export type UnitTempo = number | 'X' | TempoUndefined;
export type TempoString = `${UnitTempo}${UnitTempo}${UnitTempo}${UnitTempo}` | typeof Controlado | typeof Isometrico | typeof Rapido | typeof Explosivo
export type Tempo = WithTime<Range> | TempoString | TempoUndefined;
export type Descanso = WithTime<Range> | WithTime<Fixed> | typeof Autodefinido;

export interface Exercise {
  name: string;
  description?: string;
  intensidad?: string;
  repes: Repeticion;
  tempo?: Tempo;
}

export interface Bloque {
  id: string;
  description?: string;
  series: Serie;
  ejercicios: Exercise[];
  descanso: Descanso;
  restExercises?: Descanso
}

export type Routine = Bloque[];

export interface Planificacion {
  id: string;
  month: number;
  link: string;
  level: Level;
  routine: Routine[];
}

export interface TrainingPlan {
  title: string;
  slug: string;
  description: string;
  planificacion: Planificacion[]
}