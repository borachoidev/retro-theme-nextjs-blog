import { format } from 'date-fns'

const dateFormat = (date: string) =>
  format(new Date(date), 'dd MMM yyyy').toUpperCase()

export { dateFormat }
