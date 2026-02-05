"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from 'next/navigation'
import { getLocationBySlug, getServiceBySlug, services } from "@/lib/locations"

export type BreadcrumbLink = {
  name: string
  href: string
}

// A map for title casing specific static routes
const staticRouteNameMap: { [key: string]: string } = {
    'about': 'About Us',
    'contact': 'Contact Us',
    'cookie-policy': 'Cookie Policy',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
    'thank-you': 'Thank You',
};

export function Breadcrumbs() {
    const pathname = usePathname()
    const links: BreadcrumbLink[] = [{ name: "Home", href: "/" }];
    
    const pathSegments = pathname.split('/').filter(Boolean);

    if (pathSegments.length > 0) {
        const firstSegment = pathSegments[0];
        
        if (staticRouteNameMap[firstSegment]) {
            links.push({ name: staticRouteNameMap[firstSegment], href: `/${firstSegment}/` });
        } else if (firstSegment === 'service') {
            if (pathSegments.length > 1) {
                const serviceSlug = pathSegments[1];
                const service = getServiceBySlug(serviceSlug);
                if (service) {
                    links.push({ name: service.name, href: `/service/${service.slug}/` });
                }
            }
        } else {
            const location = getLocationBySlug(firstSegment);

            if (location) {
                links.push({ name: `${location.city}, ${location.stateCode}`, href: `/${location.slug}/` });

                if (pathSegments.length > 1) {
                    const serviceSlug = pathSegments[1];
                    const service = getServiceBySlug(serviceSlug);
                    if (service) {
                         links.push({ name: service.name, href: `/${location.slug}/${service.slug}/` });
                    }
                }
            }
        }
    }

    if (links.length <= 1) {
        return null;
    }
  
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
