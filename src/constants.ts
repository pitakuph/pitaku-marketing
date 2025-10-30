// export const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost'
export const API_URL = process.env.API_BASE_URL || 'http://localhost'

export const DEFAULT_CURRENCY = 'PHP'

export const DEFAULT_CURRENCY_SYMBOL = '₱'

export const USERSCUSTOMERS_RESOURCE = 'users/customers'

export const PH_STARTMOBILE = '09'
export const PH_DIALCODE = '+63'

export const TODAY = 0

export const PAST_SEVEN_DAYS = 6

export const DEFAULT_CUSTOMER_MOBILE = '+639000000000'

export type MobileParams = {
  mobile: string
  dialCode: string
}

export enum MainPage {
  DASHBOARD = 'Dashboard',
  TRANSACTION = 'Transaction',
  REDEMPTION = 'Redemption',
}

export enum Role {
  MERCHANT_ADMIN = 'MERCHANT_ADMIN',
  MERCHANT_STAFF = 'MERCHANT_STAFF',
}

export enum SearchOption {
  MOBILE = 'mobile',
  NAME = 'name',
  DEFAULT = 'default',
}

export enum Plan {
  FREE_TRIAL = 'FREE_TRIAL',
  PREMIUM = 'PREMIUM',
}

export enum PointBasis {
  TRANSACTION = 'TRANSACTION',
  AMOUNT = 'AMOUNT',
}
