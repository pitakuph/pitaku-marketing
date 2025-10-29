import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import Pagination from '@/components/ui/pagination'
import ExportButtonClient from '@/components/customers/ExportButtonClient'
import CustomerRowClient from '@/components/customers/CustomerRowClient'
import { getAllMerchantCustomers } from '@/lib/requestUtilsMongoDB'

type Props = {
  searchParams?: { page?: string; pageSize?: string }
}

export default async function CustomersPage({ searchParams }: Props) {
  const merchantId = '68f20102454a83cc2cf92b19'
  const data = await getAllMerchantCustomers(merchantId)
  const customers = (data && (data as any).items) || []

  // pagination params from query
  const page = Math.max(1, Number(searchParams?.page ?? 1) || 1)
  const pageSize = Math.max(1, Number(searchParams?.pageSize ?? 10) || 10)

  const total = customers.length
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const pagedCustomers = customers.slice(start, end)

  // Serialize minimal fields for passing to client component and full serializable object for popover
  const customersForExport = customers.map((c: any) => ({
    id: String(c._id ?? c.id ?? ''),
    firstName: c.firstName ?? c.name ?? c.fullName ?? '',
    lastName: c.lastName ?? '',
    email: c.email ?? '',
    phone: c.mobile ?? c.phone ?? '',
    createdAt: c.createdAt ?? c.createdDate ?? '',
  }))

  const pagedCustomersSerializable = pagedCustomers.map((c: any) => {
    // JSON stringify/parse to remove non-serializable BSON types, keep a string id
    const serial = JSON.parse(JSON.stringify(c || {}))
    serial._id = String(c._id ?? c.id ?? '')
    return serial
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Customers</h1>
        {/* client export button — receives plain-serializable data */}
        <ExportButtonClient
          customers={customersForExport}
          merchantId={merchantId}
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pagedCustomersSerializable.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>No customers found</TableCell>
            </TableRow>
          ) : (
            // Render client-side rows that open popover when clicking anywhere on the row
            pagedCustomersSerializable.map((c: any) => (
              <CustomerRowClient key={String(c._id ?? c.id)} customer={c} />
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
