import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/commons/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <header className="sticky top-0">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
