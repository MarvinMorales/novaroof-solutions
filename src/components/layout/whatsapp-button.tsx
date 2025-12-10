import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.765.11-1.057.332-.29.22-.682.487-.682 1.259 0 .833.682 1.564.924 1.765.25.2.52.402.832.643.682.488 1.482.988 2.504 1.598.98.59 1.88.945 2.616.945.69 0 1.01-.187 1.335-.372.372-.23.882-.74.882-1.6v-.28c0-.833-.372-1.018-.682-1.22z M16 .005C7.165.005.003 7.168.003 16.002c0 3.09 1.22 5.98 3.32 8.094L.002 32l8.244-3.412c2.02.944 4.31 1.448 6.75 1.448 8.835 0 15.995-7.165 15.995-15.997C32 7.167 24.835.005 16 .005zm0 29.59C9.02 29.595 3.44 24.017 3.44 16.002 3.44 9.02 8.977 3.442 16 3.442c6.99 0 12.59 5.578 12.59 12.56 0 6.99-5.6 12.59-12.59 12.59z" fillRule="evenodd"></path></svg>
)

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/1234567890" // TODO: Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 flex items-center justify-center w-14 h-14"
            aria-label="Contact us on WhatsApp"
        >
            <WhatsAppIcon />
        </Link>
    )
}
