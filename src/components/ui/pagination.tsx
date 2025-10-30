import * as React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'

const PaginationNav = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
PaginationNav.displayName = 'PaginationNav'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

/**
 * Default export Pagination component (page-linking)
 * Usage: <Pagination total={total} currentPage={page} pageSize={pageSize} basePath="/customers" />
 */
export default function Pagination({
  total,
  currentPage,
  pageSize,
  basePath = '/customers',
  neighbors = 1,
}: {
  total: number
  currentPage: number
  pageSize: number
  basePath?: string
  neighbors?: number
}) {
  const totalPages = Math.max(
    1,
    Math.ceil((total || 0) / Math.max(1, pageSize || 1)),
  )
  const makeHref = (p: number) => `${basePath}?page=${p}&pageSize=${pageSize}`

  // Build page items: always show 1 and totalPages, and a window around currentPage
  const pages: (number | 'ellipsis')[] = []
  if (totalPages <= 1) {
    pages.push(1)
  } else {
    pages.push(1)
    const start = Math.max(2, currentPage - neighbors)
    const end = Math.min(totalPages - 1, currentPage + neighbors)

    if (start > 2) pages.push('ellipsis')
    for (let p = start; p <= end; p++) pages.push(p)
    if (end < totalPages - 1) pages.push('ellipsis')
    pages.push(totalPages)
  }

  return (
    <PaginationNav>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <Link href={makeHref(currentPage - 1)} legacyBehavior>
              <PaginationPrevious />
            </Link>
          ) : (
            <PaginationPrevious
              aria-disabled="true"
              className="opacity-50 pointer-events-none"
            />
          )}
        </PaginationItem>

        {pages.map((p, idx) =>
          p === 'ellipsis' ? (
            <PaginationItem key={`e-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={`p-${p}`}>
              <Link href={makeHref(Number(p))} legacyBehavior>
                <PaginationLink isActive={p === currentPage}>
                  {String(p)}
                </PaginationLink>
              </Link>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          {currentPage < totalPages ? (
            <Link
              href={makeHref(Math.min(totalPages, currentPage + 1))}
              legacyBehavior
            >
              <PaginationNext />
            </Link>
          ) : (
            <PaginationNext
              aria-disabled="true"
              className="opacity-50 pointer-events-none"
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </PaginationNav>
  )
}

export {
  PaginationNav as Pagination, // keep named export compatibility
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
