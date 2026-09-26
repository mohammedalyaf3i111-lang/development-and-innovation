import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'AISO Development & Innovation | Industrial & Jewelry Technology Solutions',
 description:'AISO Development & Innovation develops specialized chemical products, jewelry workshop solutions, rhodium technologies, industrial processes and innovative commercial products in Saudi Arabia.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" dir="ltr"><body>{children}</body></html>; }
