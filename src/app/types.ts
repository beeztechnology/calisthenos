export type Letter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type Autodefinido = 'Autodefinido';
export type Controlado = 'Controlado';
export type Isometrico = 'Isométrico';
export type Rapido = 'Rápido';
export type Explosivo = 'Explosivo';
export type RepeticionMaxima = 'MAX';

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

export type Serie = Range | AMRAP | EMOM | Autodefinido;
export type WithCadaLado<T extends {}> = T & {
  cadaLado?: boolean;
}
export type Piramide = {
  piramide: number[]
}
export type Repeticion = WithCadaLado<WithTime<Range> | Range | WithTime<Fixed> | Fixed> | Piramide | RepeticionMaxima;

export type TempoUndefined = '-';
export type UnitTempo = number | 'X' | TempoUndefined;
export type TempoString = `${UnitTempo}${UnitTempo}${UnitTempo}${UnitTempo}` | Controlado | Isometrico | Rapido | Explosivo
export type Tempo = WithTime<Range> | TempoString | TempoUndefined;
export type Descanso = WithTime<Range> | WithTime<Fixed> | Autodefinido;

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
  ejercicios: Exercise[];
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

export interface TrainingPlan {
  title: string;
  slug: string;
  description: string;
  planificacion: Planificacion[]
}