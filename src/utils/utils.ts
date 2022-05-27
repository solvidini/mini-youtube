export const getDateFormat = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ')
