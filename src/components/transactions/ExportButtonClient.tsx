'use client'

import React from 'react'

type ExportRow = {
  id: string
  reference?: string
  customer?: string
  amount?: number
  earnedPoints?: number
  notes?: string
  createdAt?: string
}

export default function ExportButtonClient({
  transactions,
  merchantId,
}: {
  transactions: ExportRow[]
  merchantId?: string
}) {
  const handleExport = () => {
    if (!transactions || transactions.length === 0) {
      return
    }

    const rows = transactions.map((c) => {
      const created = c.createdAt ? new Date(c.createdAt).toISOString() : ''
      return {
        reference: c.reference,
        customer: c.customer,
        amount: c.amount,
        earnedPoints: c.earnedPoints,
        notes: c.notes,
        created,
      }
    })

    const header = [
      'Reference',
      'Customer',
      'Amount',
      'Earned Points',
      'Notes',
      'Created',
    ]
    const csvLines = [header.join(',')]
    for (const r of rows) {
      // const escape = (v: string) => `"${String(v).replace(/"/g, '""')}"`
      const escape = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`
      csvLines.push(
        [
          escape(r.reference ?? ''),
          escape(r.customer ?? ''),
          escape(r.amount ?? ''),
          escape(r.earnedPoints ?? ''),
          escape(r.notes ?? ''),
          escape(r.created ?? ''),
        ].join(','),
      )
    }
    const csv = csvLines.join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const ts = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `transactions_${merchantId ?? 'merchant'}_${ts}.csv`
    a.href = url
    a.setAttribute('download', filename)
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      className="inline-flex items-center px-3 py-1.5 bg-[#00C853] hover:bg-[#00B248] text-white rounded-md text-sm font-medium"
    >
      Export CSV
    </button>
  )
}
