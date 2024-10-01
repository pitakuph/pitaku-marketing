'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../Button'
import ReCAPTCHA from 'react-google-recaptcha'
import { AGE_RANGE, MONTHS, REWARD_TYPES } from './constants'
import { useRef, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { sendGAEventCustom } from '@/utils/Helper'

import Welcome from './components/Welcome'
import PrivacyPolicy from './components/PrivacyPolicy'
import ComboField from './components/ComboField'
import TextField from './components/TextField'
import ThankYou from './components/ThankYou'

export type CustomerFieldProps = {
  fieldId: string
  label: string
  required?: boolean
  errors: any
  autoFocus?: boolean
  errorMessage?: string
  register: Function
}

type Customer = {
  firstName: string
  lastName: string
  mobile: string
  email?: string
  ageRange?: string
  birthMonth?: string
  rewardType?: string
}

const CUSTOMER_ENDPOINT = `${
  process.env.API_BASE_URL || 'https://api.pitaku.ph'
}/v1/users/customers`

type LOADING_STATE = 'pending' | 'loading' | 'submitted'

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Customer>()
  const [agreed, setAgreed] = useState(false)
  const [formState, setFormState] = useState<LOADING_STATE>('pending')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [verified, setVerified] = useState(false)

  const onSubmit: SubmitHandler<Customer> = async (formData: Customer) => {
    const customerPayload: Customer = {
      ...formData,
      email: formData.email || undefined,
      ageRange: formData.ageRange
        ? AGE_RANGE.find((ar) => ar.name === formData.ageRange)?.id
        : undefined,
      birthMonth: formData.birthMonth
        ? formData.birthMonth.toUpperCase()
        : undefined,
      rewardType: formData.rewardType
        ? REWARD_TYPES.find((rt) => rt.name === formData.rewardType)?.id
        : undefined,
    }

    setFormState('loading')
    setErrorMessage(undefined)

    try {
      const response: AxiosResponse = await axios.post<Customer>(
        CUSTOMER_ENDPOINT,
        customerPayload,
      )
      if (response?.status === 201) {
        sendGAEventCustom({
          action: 'customer-create',
          category: 'Form',
          label: 'Create Success',
          value: 'Create Success',
        })
        setFormState('submitted')
      }
    } catch (error: any) {
      switch (error?.response?.status) {
        case 400:
          const message = error.response.data.message
          const invalidMobileFormat = message.includes('mobile: must match')
          setErrorMessage(
            invalidMobileFormat
              ? 'Invalid mobile number format'
              : error.response.data.message,
          )
          break
        case 500:
          setErrorMessage(
            "We've encountered problem submitting your request. Please try again later.",
          )
          break
      }
      setFormState('pending')
      recaptchaRef.current?.reset()
    }
  }

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setVerified(true);
      }
    } catch (e) {
      setVerified(false);
    }
  }

  function handleChange(token: string | null) {
    handleCaptchaSubmission(token)
  }

  const commonInputProps = {
    errors,
    register,
  }

  if (formState === 'submitted') {
    return <ThankYou />
  }

  return (
    <div className="relative px-6 py-6 sm:py-12 lg:px-8">
      <Welcome />
      <form
        className="relative mx-auto my-10 max-w-4xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        {errorMessage && (
          <div className="mx-auto text-center">
            <div className="bg-red-500">
              <p className="my-2 text-xl leading-8 text-white">
                {errorMessage}
              </p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <TextField
            autoFocus
            fieldId="firstName"
            label="First name"
            required={true}
            errorMessage="Please provide your first name."
            {...commonInputProps}
          />
          <TextField
            fieldId="lastName"
            label="Last name"
            required={true}
            errorMessage="Please provide your last name."
            {...commonInputProps}
          />
          <div className="sm:col-span-2">
            <TextField
              fieldId="mobile"
              label="Mobile"
              required={true}
              errorMessage="Please provide your mobile."
              {...commonInputProps}
            />
          </div>
          <div className="sm:col-span-2">
            <TextField fieldId="email" label="Email" {...commonInputProps} />
          </div>
          <div className="sm:col-span-2">
            <ComboField
              fieldId="ageRange"
              options={AGE_RANGE}
              label="Age Range"
              {...commonInputProps}
            />
          </div>
          <div className="sm:col-span-2">
            <ComboField
              fieldId="birthMonth"
              options={MONTHS}
              label="Birthday Month"
              {...commonInputProps}
            />
          </div>
          <div className="sm:col-span-2">
            <ComboField
              fieldId="rewardType"
              options={REWARD_TYPES}
              label="What rewards will you enjoy?"
              {...commonInputProps}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <PrivacyPolicy
              agreed={agreed}
              setAgreed={(checked) => setAgreed(checked)}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex mt-8 items-center justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              ref={recaptchaRef}
              onChange={handleChange}
              onExpired={() => setVerified(false)}
            />
          </div>
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            color="green"
            disabled={!agreed && !verified}
            className={`
              ${
                agreed && verified
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-50'
              }
              ${
                formState === 'pending'
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-50'
              }
              w-full 
            `}
          >
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
