import { Range } from "./range";
import { MAXIMO, OPTIONAL, Piramide, WithCadaLado, WithTime } from "./utilities";

export type Repeticion =
  | WithCadaLado<WithTime<Range<OPTIONAL>, OPTIONAL>>
  | Piramide
  | typeof MAXIMO;
