import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { companyInfo } from '@/utils/config';

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | ${companyInfo.tagline}`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    'pool service',
    'pool maintenance',
    'pool cleaning',
    'swimming pool',
    'Ventura County',
    'pool water treatment',
    'Clear Water Pool Service',
  ],
  authors: [
    {
      name: companyInfo.owner,
      url: '/',
    },
  ],
  creator: companyInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: companyInfo.name,
    description: companyInfo.description,
    siteName: companyInfo.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}