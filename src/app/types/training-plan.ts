import { Descanso } from "./descanso";
import { Level } from "./level";
import { Range } from "./range";
import { Repeticion } from "./reps";
import { Tempo } from "./tempo";
import { AMRAP, AUTODEFINIDO, EMOM, NEVER, OPTIONAL } from "./utilities";

export type Serie = Range<OPTIONAL> | AMRAP | EMOM | typeof AUTODEFINIDO;

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