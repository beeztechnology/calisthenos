import { Level } from "./training-plan";

export const MuscleWorkZone = {
  BRAZO: 'Brazo',
  ESPALDA: 'Espalda',
  PECHO: 'Pecho',
  HOMBRO: 'Hombro',
  CORE: 'Core',
  ABS: 'Abdominales'
} as const
export type MuscleWorkZoneType = typeof MuscleWorkZone[keyof typeof MuscleWorkZone]

export const Equipment = {
  SIN_EQUIPO: 'Sin equipo',
  BARRA: 'Barra',
  BARRA_DOMINADAS: 'Barra de dominadas',
  BARRA_PARALELAS: 'Paralelas altas',
  MINI_PARALELAS: 'Mini paralelas',
  HOME_ARTICLES: 'Artículos del hogar',
  ANILLAS: 'Anillas',
  TRX: 'TRX',
  BANCO: 'Banco / soporte',
  ESTANTE: 'Estante',
  BANDA_ELASTICA: 'Banda elastica',
  AB_WHEEL: 'Rueda abdominal'
} as const
export type EquipmentType = typeof Equipment[keyof typeof Equipment]

export const Modality = {
  ESTATICO: 'Estático',
  DINAMICO: 'Dinámico',
} as const
export type ModalityType = typeof Modality[keyof typeof Modality]

export interface ExerciseDescriptor {
  name: {
    english: string;
    spanish?: string;
  };
  description?: string;
  steps: string[];
  level: Level;
  muscleWorkZones: MuscleWorkZoneType[];
  equipment: EquipmentType[];
  modality: ModalityType;
}