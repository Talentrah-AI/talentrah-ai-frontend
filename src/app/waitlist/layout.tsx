import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';
import { Metadata } from 'next';
const Base_url =
  process.env.NODE_ENV === 'production'
    ? 'https://www.talentrah.com'
    : 'http://localhost:3000';
export const metadata: Metadata = {
  title: 'Waitlist',
  description:
    'Be among the first to experience the future of AI-powered career growth. Secure your early access today!',
  metadataBase: new URL(Base_url),
  openGraph: {
    title: 'Waitlist Talentrah AI',
    description:
      'Be among the first to experience the future of AI-powered career growth. Secure your early access today!',
    url: 'https://www.talentrah.com/waitlist',
    siteName: 'Talentrah AI',
    images: [
      {
        url: `${Base_url}/waitlist/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Waitlist Talentrah AI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waitlist Talentrah AI',
    description:
      'Be among the first to experience the future of AI-powered career growth. Secure your early access today!',
    images: {
      url: `${Base_url}/waitlist/opengraph-image.png`,
      alt: 'Waitlist Talentrah AI',
    },
  },
  alternates: {
    canonical: `${Base_url}/waitlist`,
  },
};
export default function WaitListLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="w-full relative">
        <Navbar isDark />
      </header>
      <main className="w-full">{children}</main>
      <Footer isDark />
    </>
  );
}
