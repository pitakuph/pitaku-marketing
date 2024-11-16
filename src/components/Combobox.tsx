
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'


type Props = {
    required?: boolean;
    options: any;
    setOption: (option:any)=>void;
    register: any;
    fieldId: string;
}

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ComboBox({options, setOption, register, fieldId, required = true }: Props) {
  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option:any) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedOption}
      onChange={(option) => {
        setQuery('')
        setSelectedOption(option)
        setOption(option);
      }}
    >
      {/* <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label> */}
      <div className="relative mt-2">
        <ComboboxInput
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(option:any) => option?.name}
          {...register(fieldId,
            { required }
          )}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredOptions?.length > 0 && (
          <ComboboxOptions className="relative z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions?.map((option:any, index:number) => (
              <ComboboxOption
                key={option.id}
                value={option}
                className={({ focus }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    focus ? 'bg-shamrock text-white' : 'text-gray-900',
                  )
                }
              >
                {({ focus, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{option.name}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          focus ? 'text-white' : 'text-shamrock',
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
