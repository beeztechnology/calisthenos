export const OPTIONAL = 'Opcional'
export const RECOMMENDED = 'Recomendable'

export type OptionalType<T extends string> = `[${typeof OPTIONAL}]: ${T}`
export const Optional = <T extends string>(value: T): OptionalType<T> => {
  return `[${OPTIONAL}]: ${value}`
}
export type RecommendedType<T extends string> = `[${typeof RECOMMENDED}]: ${T}`
export const Recommended = <T extends string>(value: T): RecommendedType<T> => {
  return `[${RECOMMENDED}]: ${value}`
}