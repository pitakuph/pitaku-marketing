export const AGE_RANGE = [
  { id: 'EIGHTEEN_TWENTYFIVE', name: '18 - 25' },
  { id: 'TWENTYSIX_THIRTYFIVE', name: '26 - 35' },
  { id: 'THIRTYSIX_FORTYFIVE', name: '36 - 45' },
  { id: 'FORTYSIX_SIXTY', name: '46 - 60' },
  { id: 'SIXTYONE_OLDER', name: '61 or older' },
]

function capitalizeFirstLetter(str: string) {
  const lcasedStr = str.toLowerCase()
  return `${lcasedStr.charAt(0).toUpperCase()}${lcasedStr.slice(1)}`
}

export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
].map((month) => ({ id: month, name: capitalizeFirstLetter(month) }))

export const REWARD_TYPES = [
  { id: 'FREE_ITEMS', name: 'Free Items' },
  { id: 'DISCOUNTS', name: 'Discounts' },
  { id: 'FREE_SERVICES', name: 'Free Services' },
]
