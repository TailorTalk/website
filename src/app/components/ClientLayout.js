'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isGuidePage = pathname?.startsWith('/guide');

  return (
    <>
        {!isGuidePage && <Header />}
      {children}
      {!isGuidePage && <Footer />}
    </>
  );
}