'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function GoToHomepageButton() {
  return (
    <Button asChild variant="link" className="" size="default">
      <Link href="/" className="flex items-center gap-2">
        <Home className="h-4 w-4" />
        <span>Go to Homepage</span>
      </Link>
    </Button>
  )
}
