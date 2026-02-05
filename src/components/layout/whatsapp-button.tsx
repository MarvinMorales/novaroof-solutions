"use client";

import Link from 'next/link';
import { trackCallAction } from '@/app/actions';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor"><path d="M16 0A16 16 0 1 0 16 32A16 16 0 1 0 16 0zM24.1 21.6c-.2-.1-1-0.5-1.2-0.6s-.3-.1-.5 0.1l-.8 1c-.1 0.1-0.2 0.2-0.3 0.2s-.2 0-.3-0.1c-0.1-0.1-0.3-0.2-0.4-0.3 -0.6-0.5-1.4-1.2-2.3-2.2 -0.8-0.8-1.5-1.8-1.9-2.7 -0.1-0.2-0.1-0.5 0-0.7 0.1-0.2 0.2-0.4 0.3-0.5l0.7-0.8c0.1-0.2 0.2-0.3 0.2-0.5s0-0.3-0.1-0.4l-2-2.4c-0.1-0.2-0.3-0.3-0.5-0.3 -0.2 0-0.4 0.1-0.5 0.2l-0.8 0.9c-0.2 0.2-0.3 0.4-0.4 0.6s-0.2 0.5-0.2 0.8c0 0.7 0.2 1.4 0.6 2.1s1 1.5 1.7 2.4c1.7 2.1 3.7 3.6 6 4.6 0.5 0.2 1 0.4 1.6 0.5 0.8 0.1 1.5-0.1 2.1-0.5 0.5-0.4 1-1 1.2-1.6 0.1-0.2 0.1-0.5 0.1-0.7s-0.1-0.4-0.2-0.5l-1.6-1.1C24.4 21.6 24.2 21.6 24.1 21.6z" /></svg>
)

export function WhatsAppButton() {
    const handleCallClick = () => {
        trackCallAction();
    };
    
    return (
        <Link
            href="https://wa.me/15623177925"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCallClick}
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 flex items-center justify-center w-14 h-14"
            aria-label="Contact us on WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8"/>
        </Link>
    )
}
