import { eachDayOfInterval, format } from 'date-fns'

export const DATE_FORMATTING_OPTIONS: any = {
  label: 'Date',
  options: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
}

export const DATE_FORMATTING_OPTIONS_COMPACT: any = {
  options: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
}

export function getDatesFrom(startDate: Date, endDate: Date) {
  const result = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  return result.map((d) => toYyyyMMddString(d))
}

export function toYyyyMMddString(date: Date) {
  return format(date, 'yyyy-MM-dd')
}

export function toPPString(date: string) {
  return format(new Date(date), 'PP')
}

export function toMMMddString(date: string) {
  return format(new Date(date), 'E')
}

export function toMMMddhhmmaaString(date: string) {
  return format(new Date(date), 'MMM dd, hh:mm aa', {})
}
