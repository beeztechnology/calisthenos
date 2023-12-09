import { NEVER, OPTIONAL, REQUIRED } from "./utilities";

export type Range<T extends REQUIRED | OPTIONAL | NEVER = REQUIRED> = {
  range: (
    T extends REQUIRED
    ? [number, number]
    : T extends OPTIONAL
    ? ([number, number] | [number])
    : [number]
  );
}