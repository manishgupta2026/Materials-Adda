import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Materials Adda',
  description: 'Your go-to place for PYQs, notes, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-800 bg-gray-50`}>
        <Header />
        <main className="min-h-screen p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}