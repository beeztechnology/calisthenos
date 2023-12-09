import { Range } from "./range";
import { AUTODEFINIDO, OPTIONAL, WithTime } from "./utilities";

export type Descanso =
  | WithTime<Range<OPTIONAL>>
  | typeof AUTODEFINIDO;
