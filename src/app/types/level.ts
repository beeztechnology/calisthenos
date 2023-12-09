export const Level = {
  PRINCIPIANTE: 'Principiante',
  INTERMEDIO: 'Intermedio',
  AVANZADO: 'Avanzado',
  EXPERTO: 'Experto'
} as const
export type Level = typeof Level[keyof typeof Level];
