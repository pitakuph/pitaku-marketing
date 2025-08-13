import { Field, Switch } from '@headlessui/react'

type PrivacyPolicyProps = {
  agreed: boolean
  setAgreed: (checked: boolean) => void
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function PrivacyPolicy({ agreed, setAgreed }: PrivacyPolicyProps) {
  return (
    <>
      <Field as="div" className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={classNames(
              agreed ? 'bg-shamrock' : 'bg-gray-200',
              'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock',
            )}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={classNames(
                agreed ? 'translate-x-3.5' : 'translate-x-0',
                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
              )}
            />
          </Switch>
        </div>
      </Field>
      <p className="text-sm  text-gray-600">
        By selecting this, you agree to our{' '}
        <a
          href="/privacy-policy"
          target="_blank"
          className="font-medium text-shamrock"
        >
          privacy&nbsp;policy
        </a>
        .
      </p>
    </>
  )
}

export default PrivacyPolicy
