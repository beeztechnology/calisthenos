import { Range } from "./range";
import { ExtractStrict, WithTime } from "./utilities";
export const Tempo = {
  CONTROLADO: 'Controlado',
  ISOMETRICO: 'Isométrico',
  RAPIDO: 'Rápido',
  EXPLOSIVO: 'Explosivo',
  UNDEFINED: '-',
} as const
export type TempoType = typeof Tempo[keyof typeof Tempo];

type Unit =
  | number
  | 'X'
  | ExtractStrict<TempoType, typeof Tempo.UNDEFINED>;

export type Tempo =
  | WithTime<Range>
  | `${Unit}${Unit}${Unit}${Unit}`
  | TempoType
