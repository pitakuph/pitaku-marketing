'use client'

import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { formatDate } from '@/utils/Helper'

export default function CustomerRowClient({
  customer,
}: {
  customer: Record<string, any>
}) {
  const cust: any = customer || {}
  const fullName =
    cust.firstName || cust.lastName
      ? `${cust.firstName ?? ''} ${cust.lastName ?? ''}`.trim()
      : (cust.name ?? cust.fullName ?? '-')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <TableRow className="cursor-pointer hover:bg-muted/50">
          <TableCell>{fullName}</TableCell>
          <TableCell>{cust.email ?? '-'}</TableCell>
          <TableCell>{cust.mobile ?? cust.phone ?? '-'}</TableCell>
          <TableCell>
            {cust.createdAt ? new Date(cust.createdAt).toLocaleString() : '-'}
          </TableCell>
        </TableRow>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{fullName}</h3>
              <p className="text-sm text-muted-foreground">
                {cust.email ?? ''}
              </p>
            </div>
            {/* <div>
              <Button size="sm" variant="ghost" onClick={() => { }}>
                Close
              </Button>
            </div> */}
          </div>

          <div className="text-sm">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(cust)
                  .filter(
                    ([k]) =>
                      !['_id', 'password', 'createdAt', 'updatedAt'].includes(
                        k,
                      ),
                  )
                  .map(([k, v]) => (
                    <tr key={k} className="border-t">
                      <td className="py-1 pr-2 font-medium text-muted-foreground align-top w-28">
                        {k}
                      </td>
                      <td className="py-1 break-words">
                        {k === 'dateOfBirth'
                          ? formatDate(String(v))
                          : String(v ?? '')}
                      </td>
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
