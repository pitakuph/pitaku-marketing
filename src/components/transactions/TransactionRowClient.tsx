'use client'

import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { TableRow, TableCell } from '@/components/ui/table'
import { formatDate } from '@/utils/Helper'

export default function TransactionRowClient({
  transaction,
}: {
  transaction: Record<string, any>
}) {
  const trans: any = transaction || {}

  return (
    <Popover>
      <PopoverTrigger asChild>
        <TableRow className="cursor-pointer hover:bg-muted/50">
          <TableCell>{trans.reference}</TableCell>
          <TableCell>{trans.customer ?? '-'}</TableCell>
          <TableCell>{trans.amount ?? '-'}</TableCell>
          <TableCell>{trans.earnedPoints ?? '-'}</TableCell>
          <TableCell>{trans.notes ?? '-'}</TableCell>
          <TableCell>
            {trans.createdAt ? new Date(trans.createdAt).toLocaleString() : '-'}
          </TableCell>
        </TableRow>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{trans.reference}</h3>
              <p className="text-sm text-muted-foreground">
                {trans.customer ?? ''}
              </p>
            </div>
          </div>

          <div className="text-sm">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(trans)
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
