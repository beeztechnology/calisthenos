import { Descanso } from "./descanso";
import { Level } from "./level";
import { Range } from "./range";
import { Repeticion } from "./reps";
import { Tempo } from "./tempo";
import { AMRAP, AUTODEFINIDO, EMOM, NEVER, OPTIONAL } from "./utilities";

export type ISerie = Range<OPTIONAL> | AMRAP | EMOM | typeof AUTODEFINIDO;

export interface IExercise {
  name: string;
  description?: string;
  intensidad?: string;
  repes: Repeticion;
  tempo?: Tempo;
}

export interface IBloque {
  id: string;
  description?: string;
  series: ISerie;
  ejercicios: IExercise[];
  descanso: Descanso;
  restExercises?: Descanso
}

export type Routine = IBloque[];

export interface IPlanificacion {
  id: string;
  month: number;
  link: string;
  level: Level;
  routine: Routine[];
}

export interface ITrainPlan {
  title: string;
  slug: string;
  description: string;
  planificacion: IPlanificacion[]
}