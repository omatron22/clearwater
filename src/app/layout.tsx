import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReCaptchaProvider from '@/components/ReCaptchaProvider';

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Clear Water Pool Service | Professional Pool Maintenance',
    template: '%s | Clear Water Pool Service',
  },
  description: 'Professional pool maintenance services in Ventura County. We focus exclusively on maintaining your pool in pristine condition.',
  keywords: [
    'pool service',
    'pool maintenance',
    'pool cleaning',
    'swimming pool',
    'Ventura County',
    'pool water treatment',
    'Clear Water Pool Service',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ReCaptchaProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}