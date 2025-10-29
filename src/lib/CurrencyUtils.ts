import { DEFAULT_CURRENCY, DEFAULT_CURRENCY_SYMBOL } from '../constants'

export function monetary(
  currency: 'PHP' | 'USD',
  amount: number,
  compact = false,
) {
  const locale = currency === 'USD' ? 'en-US' : 'en-PH'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: compact ? 'compact' : undefined,
  }).format(amount)
}

export function symbol(currency: 'PHP' | 'USD' = DEFAULT_CURRENCY) {
  const locale = currency === 'USD' ? 'en-US' : 'en-PH'
  return (
    new Intl.NumberFormat(locale, { style: 'currency', currency })
      .formatToParts(1)
      .find((x) => x.type === 'currency')?.value ?? DEFAULT_CURRENCY_SYMBOL
  )
}
