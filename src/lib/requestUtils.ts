// import { AxiosResponse } from 'axios'

// import {
//   AuthToken,
//   CustomerReward,
//   CustomerRewardsList,
//   Merchant,
//   MerchantStatistics,
//   Redemption,
//   RedemptionsList,
//   Reward,
//   RewardsList,
//   Transaction,
//   TransactionsList,
//   User,
//   UsersList,
// } from '@/types/schema'
// import {
//   AuthCredentials,
//   CustomerCreateParams,
//   MerchantRequestParams,
//   RedemptionCreateParams,
//   RewardRequestParams,
//   TransactionCreateParams,
//   UserRequestParams,
//   SignUpData,
// } from '@/types/types'
// import axios from './axiosInstance'
// import { useQuery } from 'react-query'
// import { Role } from '@/constants'

// export function getStoredToken() {
//   return localStorage.getItem('userAccessToken')
// }

// export async function login(credentials: AuthCredentials) {
//   const params = {
//     headers: {
//       'x-authorized-roles': [Role.MERCHANT_ADMIN, Role.MERCHANT_STAFF],
//     },
//   }
//   return axios
//     .post<AuthToken>(`/login`, credentials, params)
//     .then(function (response: AxiosResponse) {
//       if (response) {
//         localStorage.setItem('userAccessToken', response.data.accessToken)
//       }
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// /**CREATE/SIGN UP MERCHANT ACCOUNT */
// export async function signup(signUpData: SignUpData) {
//   return axios
//     .post<Merchant>(`/v1/merchants`, signUpData)
//     .then(function (response) {
//       return response
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function activateMerchant({ merchantId }: any) {
//   return axios
//     .post(`/v1/merchants/${merchantId}/activate`)
//     .then(function (response) {
//       return response
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function logout() {
//   return axios
//     .post(`/logout`)
//     .then(function () {
//       localStorage.clear()
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// // called when the user request to reset password
// export async function requestResetPassword(email: string) {
//   return axios
//     .post('/password:request-reset', JSON.stringify(email), {
//       headers: { 'X-Requested-From': 'operator' },
//     })
//     .then(function (response) {
//       return response
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// /** POST */

// export function postTransaction({ merchantId, data }: TransactionCreateParams) {
//   return axios
//     .post<Transaction>(`/v1/merchants/${merchantId}/transactions`, data)
//     .then(function (response) {
//       return response
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function postRedemption({
//   merchantId,
//   data,
// }: RedemptionCreateParams) {
//   return axios
//     .post<Redemption>(`/v1/merchants/${merchantId}/redemptions`, data)
//     .then(function (response) {
//       return response
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function postCustomer({ merchantId, data }: CustomerCreateParams) {
//   return axios
//     .post<User>(`/v1/merchants/${merchantId}/customers`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function postReward({ merchantId, data }: RewardRequestParams) {
//   return axios
//     .post<Reward>(`/v1/merchants/${merchantId}/rewards`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function postOperator({ merchantId, data }: UserRequestParams) {
//   return axios
//     .post<User>(`/v1/merchants/${merchantId}/operators`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function activateOperator({
//   merchantId,
//   userId,
// }: UserRequestParams) {
//   return axios
//     .post<User>(`/v1/merchants/${merchantId}/operators/${userId}:activate`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function deactivateOperator({
//   merchantId,
//   userId,
// }: UserRequestParams) {
//   return axios
//     .delete<User>(`/v1/merchants/${merchantId}/operators/${userId}:deactivate`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// /** PUT */

// export async function putOperator({
//   merchantId,
//   userId,
//   data,
// }: UserRequestParams) {
//   return axios
//     .put<User>(`/v1/merchants/${merchantId}/operators/${userId}`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function putReward({
//   merchantId,
//   rewardId,
//   data,
// }: RewardRequestParams) {
//   return axios
//     .put<Reward>(`/v1/merchants/${merchantId}/rewards/${rewardId}`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// export async function putMerchant({ merchantId, data }: MerchantRequestParams) {
//   return axios
//     .put<Merchant>(`/v1/merchants/${merchantId}`, data)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error: any) {
//       return Promise.reject(error)
//     })
// }

// /** GET */

// export function getMe() {
//   return axios
//     .get<User>(`/v1/me`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       localStorage.clear()
//       window.location.replace('/login')
//       return Promise.reject(error)
//     })
// }

// export function getMerchantRewards(merchantId: number) {
//   return axios
//     .get<RewardsList>(`/v1/merchants/${merchantId}/rewards`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getMerchantTransactions(merchantId: number) {
//   const params = {
//     sort: 'createdDate',
//     order: 'desc',
//     pageSize: 1000,
//   }
//   return axios
//     .get<TransactionsList>(`/v1/merchants/${merchantId}/transactions`, {
//       params,
//     })
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getMerchantRedemptions(merchantId: number) {
//   const params = {
//     sort: 'createdDate',
//     order: 'desc',
//     pageSize: 1000,
//   }
//   return axios
//     .get<RedemptionsList>(`/v1/merchants/${merchantId}/redemptions`, { params })
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getMerchantStatistics(merchantId: number, days: number = 0) {
//   const params = { days: `${days}` }
//   return axios
//     .get<MerchantStatistics>(`/v1/merchants/${merchantId}/statistics`, {
//       params,
//     })
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getMerchantCustomer(merchantId: number, customerId: number) {
//   return axios
//     .get<CustomerReward>(`/v1/merchants/${merchantId}/customers/${customerId}`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getSearchedCustomer(q: string = '') {
//   if (q.length < 3) return
//   return axios
//     .get<UsersList>(`/v1/users/customers`, { params: { q } })
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getAllMerchantCustomers(merchantId: number) {
//   const params = {
//     pageSize: 1000,
//   }
//   return axios
//     .get<CustomerRewardsList>(`/v1/merchants/${merchantId}/customers`, {
//       params,
//     })
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getMerchant(merchantId: number) {
//   return axios
//     .get<Merchant>(`/v1/merchants/${merchantId}`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getOperators(merchantId: number) {
//   return axios
//     .get<UsersList>(`/v1/merchants/${merchantId}/operators`)
//     .then(function (response) {
//       return response.data
//     })
//     .catch(function (error) {
//       return Promise.reject(error)
//     })
// }

// export function getStatistics(merchantId: number, days: number = 0) {
//   const { data } = useQuery(['statitics', merchantId, days], () =>
//     getMerchantStatistics(merchantId, days),
//   )
//   return data as MerchantStatistics
// }

// export function getCustomer(merchantId: number, customerId: number) {
//   const { data } = useQuery(['customer', merchantId, customerId], () =>
//     getMerchantCustomer(merchantId, customerId),
//   )
//   return data as CustomerReward
// }
