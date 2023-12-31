import { OptionalType, RecommendedType } from './global';
import { Level } from "./level";

export const MuscleWorkZone = {
  BICEPS: 'Biceps',
  TRICEPS: 'Triceps',
  DORSALES: 'Dorsales',
  PECTORALES: 'Pectorales',
  DELTOIDES: 'Deltoides',
  CORE: 'Core',
  ABS: 'Abs',
  ESPALDA_BAJA: 'Espalda baja',
  PIERNA: 'Pierna'
} as const
export type MuscleWorkZone = typeof MuscleWorkZone[keyof typeof MuscleWorkZone]

export const Equipment = {
  BARRA: 'Barra',
  BARRA_DOMINADAS: 'Barra de dominadas',
  BARRA_PARALELAS: 'Paralelas altas',
  MINI_PARALELAS: 'Mini paralelas',
  HOME_ARTICLES: 'Artículos del hogar',
  ANILLAS: 'Anillas',
  PELOTA: 'Pelota',
  TRX: 'TRX',
  SOPORTE: 'Banco / soporte / Apoyo',
  ESTANTE: 'Estante',
  BANDA_ELASTICA: 'Banda elastica',
  AB_WHEEL: 'Rueda abdominal'
} as const
export type Equipment =
  | typeof Equipment[keyof typeof Equipment]
  | OptionalType<typeof Equipment[keyof typeof Equipment]>
  | RecommendedType<typeof Equipment[keyof typeof Equipment]>

export const Modality = {
  ESTATICO: 'Estático',
  DINAMICO: 'Dinámico',
} as const
export type Modality = typeof Modality[keyof typeof Modality]

export interface IExerciseDescriptor {
  id: string;
  name: {
    english: string;
    spanish: string;
  };
  instructions: string[];
  level: Level;
  muscleWorkZones: MuscleWorkZone[];
  equipment: Equipment[];
  modality: Modality;
}