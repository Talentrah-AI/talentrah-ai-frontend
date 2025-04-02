import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'sonner';

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});
// Metadata for SEO
const Base_url = process.env.NODE_ENV === "production"
  ? "https://www.talentrah.com" : "http://localhost:3000";
export const metadata: Metadata = {
  title: 'Talentrah-ai',
  description: 'Your next career move starts here',
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(Base_url),
  openGraph: {
    title: "Talentrah-ai",
    description:
      "Your next career move starts here",
    url: "https://www.talentrah.com",
    siteName: "Talentrah-ai",
    images: [
      {
        url: "/landing.png",
        width: 1200,
        height: 630,
        alt: "Talentrah-ai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talentrah-ai",
    description: "Your next career move starts here",
    images: ["/landing.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: Base_url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gabarito.variable}>
      <body className={gabarito.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
