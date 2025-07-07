import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Modernest - Let You Be Happy',
  description: 'Premier technology support services including web development, mobile app development, CISCO networking, and exam preparation. Transform your ideas into reality.',
  keywords: 'web development, mobile app development, CISCO networking, exam preparation, technology support',
  authors: [{ name: 'The Modernest Team' }],
  creator: 'The Modernest',
  publisher: 'The Modernest',
  robots: 'index, follow',
  openGraph: {
    title: 'The Modernest - Let You Be Happy',
    description: 'Premier technology support services including web development, mobile app development, CISCO networking, and exam preparation.',
    url: 'https://themodernest.com',
    siteName: 'The Modernest',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Modernest - Technology Excellence Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Modernest - Let You Be Happy',
    description: 'Premier technology support services including web development, mobile app development, CISCO networking, and exam preparation.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}