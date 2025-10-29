'use client'

import React from 'react'

type ExportRow = {
  id: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  createdAt?: string
}

export default function ExportButtonClient({
  customers,
  merchantId,
}: {
  customers: ExportRow[]
  merchantId?: string
}) {
  const handleExport = () => {
    if (!customers || customers.length === 0) {
      return
    }

    const rows = customers.map((c) => {
      const name =
        c.firstName || c.lastName
          ? `${c.firstName ?? ''} ${c.lastName ?? ''}`.trim()
          : c.firstName || c.lastName || ''
      const created = c.createdAt ? new Date(c.createdAt).toISOString() : ''
      return {
        name,
        email: c.email ?? '',
        phone: c.phone ?? '',
        created,
      }
    })

    const header = ['Name', 'Email', 'Phone', 'Created']
    const csvLines = [header.join(',')]
    for (const r of rows) {
      const escape = (v: string) => `"${String(v).replace(/"/g, '""')}"`
      csvLines.push(
        [
          escape(r.name),
          escape(r.email),
          escape(r.phone),
          escape(r.created),
        ].join(','),
      )
    }
    const csv = csvLines.join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const ts = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `customers_${merchantId ?? 'merchant'}_${ts}.csv`
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
