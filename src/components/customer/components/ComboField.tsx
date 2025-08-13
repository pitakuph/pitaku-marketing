import ComboBox from '@/components/Combobox'
import { CustomerFieldProps } from '../CustomerForm'

type ComboOption = { id: string; name: string }

function ComboField({
  fieldId,
  label,
  errors,
  errorMessage,
  register,
  required = false,
  options,
}: CustomerFieldProps & { options: ComboOption[] }) {
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block text-sm font-medium  text-gray-900"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-2.5">
        <ComboBox
          options={options}
          setOption={() => {}}
          fieldId={fieldId}
          register={register}
          required={required}
        />
        {errors[fieldId] && required && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    </div>
  )
}

export default ComboField
