'use client'

import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

export default function CustomerPopoverClient({
  customer,
  label,
}: {
  customer: Record<string, any>
  label: React.ReactNode
}) {
  // Render a concise label that opens a popover containing full details
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="text-left underline text-primary hover:text-primary/80"
        >
          {label}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-muted-foreground">
                {customer.email ?? ''}
              </p>
            </div>
            {/* <div>
              <Button size="sm" variant="ghost" onClick={() => {}}>
                Close
              </Button>
            </div> */}
          </div>

          <div className="text-sm">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(customer).map(([k, v]) => (
                  <tr key={k} className="border-t">
                    <td className="py-1 pr-2 font-medium text-muted-foreground align-top w-28">
                      {k}
                    </td>
                    <td className="py-1">{String(v ?? '')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
