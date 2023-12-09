export const AUTODEFINIDO = 'Autodefinido';
export const MAXIMO = 'Máximo';
export type REQUIRED = 'required'
export type OPTIONAL = 'optional'
export type NEVER = 'never'

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * Exclude from T those types that are assignable to U
 */
export type ExcludeStrict<T, U extends T> = T extends U ? never : T;
/**
 * Extract from T those types that are assignable to U
 */
export type ExtractStrict<T, U extends T> = T extends U ? T : never;

type IsTime = { isTime: true; }
export type WithTime<T extends {}, K extends REQUIRED | OPTIONAL = REQUIRED> = T &
  (K extends REQUIRED ? IsTime : Partial<IsTime>)

export type WithCadaLado<T extends {}> = T & {
  cadaLado?: boolean;
}
export type AMRAP = {
  amrap: number;
}
export type EMOM = {
  emom: number;
}
export type Piramide = {
  piramide: number[]
}