export const getDateFormat = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ')

export const generateClass = (mainClass: string, options?: { [key: string]: boolean }) => {
  const classes = [mainClass]
  if (options?.isChannel) classes.push(mainClass + '--channel')
  if (options?.isPlayer) classes.push(mainClass + '--with-player')
  return classes.join(' ')
}
