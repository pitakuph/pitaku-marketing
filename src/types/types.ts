import {
  MerchantRequest,
  RewardRequest,
  TransactionCreateRequest,
  UserRequest,
} from './schema'

export type AuthCredentials = {
  username: string
  password: string
}

export type TransactionCreateParams = {
  merchantId: number
  data: TransactionCreateRequest
}

export type RedemptionCreateRequest = {
  rewardId: number
  customerId: number
  notes?: string
}

export type RedemptionCreateParams = {
  merchantId: number
  data: RedemptionCreateRequest
}

export type CustomerCreateParams = {
  merchantId: number
  data: UserRequest
}

export type RewardRequestParams = {
  merchantId: number
  rewardId?: number
  data: RewardRequest
}

export type UserRequestParams = {
  merchantId: number
  userId?: number
  data?: UserRequest
}

export type MerchantRequestParams = {
  merchantId: number
  data: MerchantRequest
}

export type CustomComboboxData = {
  value: string
  label: string
  data?: any
}

export type AutocompleteData = {
  id: number
  value: string
  label: string
  data: any
}

export type RedemptionChartData = {
  date: string
  quantity: number
}

export type TransactionChartData = {
  date: string
  amount: number
}

export type SignUpData = {
  name: string
  email: string
  password: string
}
