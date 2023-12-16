import { Range } from "@/app/types/range";
import { NEVER, OPTIONAL, Piramide, WithCadaLado, WithTime } from "@/app/types/utilities";

export const isFixed = (item: unknown): item is Range<NEVER> => {
  if (typeof item !== 'object') return false;
  return (item as Range<NEVER>).range.length === 1
}

export const isRange = (item: unknown): item is Range<OPTIONAL> => {
  if (typeof item !== 'object') return false;
  return !!(item as Range<OPTIONAL>).range
}

export const isPiramide = (reps: unknown): reps is Piramide => {
  return !!(reps as Piramide).piramide
}

export const isCadaLado = (reps: unknown): reps is WithCadaLado<object> => {
  return !!(reps as WithCadaLado<object>).cadaLado
}

export const isRangeTime = (item: unknown): item is WithTime<Range<OPTIONAL>> => {
  if (!isRange(item)) return false;
  return (item as WithTime<Range>).isTime
}