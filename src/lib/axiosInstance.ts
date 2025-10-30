// import axios from 'axios'

// import { API_URL } from '@/constants'
// import { getStoredToken } from './requestUtils'

// enum HTTP_STATUS {
//   OK = 200,
//   CREATED = 201,
//   NO_RESPONSE = 204,
//   UNAUTHORIZED = 401,
//   SERVER_ERROR = 500,
// }

// const instance = axios.create({
//   baseURL: API_URL,
// })

// instance.interceptors.request.use(
//   (config) => {
//     //@ts-ignore
//     config.headers = {
//       ...config.headers,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: getStoredToken()
//         ? `Bearer ${getStoredToken()}`
//         : undefined,
//     }
//     return config
//   },
//   (error) => Promise.reject(error),
// )

// instance.interceptors.response.use(
//   (response) => {
//     if (
//       [HTTP_STATUS.OK, HTTP_STATUS.CREATED, HTTP_STATUS.NO_RESPONSE].includes(
//         response.status,
//       )
//     ) {
//       return response
//     } else {
//       const messages = response.data.messages
//       if (messages) {
//         if (messages instanceof Array) {
//           return Promise.reject({ messages })
//         }
//         return Promise.reject({ messages: [messages] })
//       }
//       return Promise.reject({ messages: ['got errors'] })
//     }
//   },
//   (error) => {
//     if (error.response && error.response.status === HTTP_STATUS.UNAUTHORIZED) {
//       if (getStoredToken()) {
//         localStorage.clear()
//         window.location.replace('/login')
//       }
//       return Promise.reject(error.response)
//     } else if (
//       error.response &&
//       error.response.status === HTTP_STATUS.SERVER_ERROR
//     ) {
//       return Promise.reject(error.response)
//     } else return Promise.reject(error)
//   },
// )

// export default instance
