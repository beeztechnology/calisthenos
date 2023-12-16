export const Level = {
  PRINCIPIANTE: {
    slug: 'principiante',
    value: 'Principiante'
  },
  INTERMEDIO: {
    slug: 'intermedio',
    value: 'Intermedio'
  },
  AVANZADO: {
    slug: 'avanzado',
    value: 'Avanzado'
  },
  MUY_AVANZADO: {
    slug: 'muy-avanzado',
    value: 'Muy avanzado'
  },
} as const
export type Level = typeof Level[keyof typeof Level];
