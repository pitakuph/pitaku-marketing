import { CustomerFieldProps } from '../CustomerForm'

function TextField({
  fieldId,
  label,
  autoFocus,
  required,
  errors,
  errorMessage,
  register,
}: CustomerFieldProps) {
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block text-sm font-medium  text-gray-900"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-2.5">
        <input
          autoFocus={autoFocus}
          type="text"
          id={fieldId}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
          {...register(fieldId, { required })}
        />
        {errors[fieldId] && errorMessage && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    </div>
  )
}

export default TextField
