'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isNotDisplayPage = pathname?.startsWith('/guide') || pathname?.startsWith('/faqs');

  return (
    <>
        {!isNotDisplayPage && <Header />}
      {children}
      {!isNotDisplayPage && <Footer />}
    </>
  );
}