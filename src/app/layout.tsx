import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This root layout is intentionally minimal.
  // The main layout structure is in [lang]/layout.tsx to support i18n.
  return children;
}
