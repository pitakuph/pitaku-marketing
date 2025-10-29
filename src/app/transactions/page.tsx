import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import Pagination from '@/components/ui/pagination'
import ExportButtonClient from '@/components/transactions/ExportButtonClient'
import TransactionRowClient from '@/components/transactions/TransactionRowClient'
import { getMerchantTransactions } from '@/lib/requestUtilsMongoDB'

type Props = {
  searchParams?: { page?: string; pageSize?: string }
}

export default async function TransactionsPage({ searchParams }: Props) {
  const merchantId = '68f20102454a83cc2cf92b19'
  const data = await getMerchantTransactions(merchantId)
  const transactions = (data && (data as any).items) || []

  // pagination params from query
  const page = Math.max(1, Number(searchParams?.page ?? 1) || 1)
  const pageSize = Math.max(1, Number(searchParams?.pageSize ?? 10) || 10)

  const total = transactions.length
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const pagedTransactions = transactions.slice(start, end)

  // Serialize minimal fields for passing to client component and full serializable object for popover
  const transactionsForExport = transactions.map((c: any) => ({
    id: String(c._id ?? c.id ?? ''),
    reference: c.reference,
    customer: c.customer,
    amount: c.amount,
    earnedPoints: c.earnedPoints,
    notes: c.notes,
    createdAt: c.createdAt ?? c.createdDate ?? '',
  }))

  const pagedTransactionsSerializable = pagedTransactions.map((c: any) => {
    // JSON stringify/parse to remove non-serializable BSON types, keep a string id
    const serial = JSON.parse(JSON.stringify(c || {}))
    serial._id = String(c._id ?? c.id ?? '')
    return serial
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Transactions</h1>
        {/* client export button — receives plain-serializable data */}
        <ExportButtonClient
          transactions={transactionsForExport}
          merchantId={merchantId}
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reference ID</TableHead>
            <TableHead>Customer ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Earned Points</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pagedTransactionsSerializable.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>No transactions found</TableCell>
            </TableRow>
          ) : (
            // Render client-side rows that open popover when clicking anywhere on the row
            pagedTransactionsSerializable.map((c: any) => (
              <TransactionRowClient
                key={String(c._id ?? c.id)}
                transaction={c}
              />
            ))
          )}
        </TableBody>
      </Table>

      <div className="mt-4">
        {/* Pagination component (visual) */}
        <Pagination total={total} currentPage={page} pageSize={pageSize} />
      </div>
    </div>
  )
}
