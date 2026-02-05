"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from 'next/navigation'

export type BreadcrumbLink = {
  name: string
  href: string
}

export function Breadcrumbs({ links }: { links: BreadcrumbLink[] }) {
    const pathname = usePathname()

  return (
    <div className="bg-muted/50 border-b">
        <nav className="container flex py-3" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2 text-sm">
            {links.map((link, index) => (
            <li key={link.name}>
                <div className="flex items-center">
                {index > 0 && (
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground mx-2" />
                )}
                <Link
                    href={link.href}
                    className={`font-medium ${
                    pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                     aria-current={pathname === link.href ? "page" : undefined}
                >
                    {link.name}
                </Link>
                </div>
            </li>
            ))}
        </ol>
        </nav>
    </div>
  )
}
