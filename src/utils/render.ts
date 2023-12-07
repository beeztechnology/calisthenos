export const renderTime = (time: number): string => {
  let seconds: string = (time % 60)
    .toString()
    .padStart(2, '0')
  seconds += '"'
  let minutes: string = Math
    .floor(time / 60)
    .toString()
    .padStart(2, '0');
  if (Number(minutes) === 0) {
    return seconds
  }
  minutes += '\''
  return `${minutes}${seconds}`
}