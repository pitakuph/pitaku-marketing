// import { clsx, type ClassValue } from 'clsx'
// import { twMerge } from 'tailwind-merge'

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import { PH_DIALCODE, PH_STARTMOBILE } from '@/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** This function will convert +639 to 09 before showing to UI.
 *  The goal is to have one format to check for the uniqueness on the server side.
 */
export const transformMobileToStartWith0 = (
  mobile: string,
  dialCode: string = '+63',
) => {
  let newNumber = mobile
  if (mobile.length === 13 && mobile.substring(0, 3) === dialCode) {
    newNumber = '0' + newNumber.substring(3)
  }
  return newNumber
}

/** This function will convert 09 to +639 before sending to DB.
 *  The goal is to have one format to check for the uniqueness on the server side.
 */
export function transformMobileNumber(mobile: string) {
  let newNumber = mobile
  if (mobile.length === 11 && mobile.substring(0, 2) === PH_STARTMOBILE) {
    newNumber =
      newNumber.substring(0, 0) + PH_DIALCODE + newNumber.substring(0 + 1)
  }
  return newNumber
}

/** This function validates the mobile number.
 *  Return true is the mobile meets the regex for Philippines mobile number.
 */
export function validateMobile(mobile: string) {
  const re = /^(09|\+639)\d{9}$/
  return Boolean(mobile.match(re))
}
