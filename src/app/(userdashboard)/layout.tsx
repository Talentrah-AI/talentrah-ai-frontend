import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import ClientLayoutContent from './ClientLayoutContent';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'Talentrah',
  description: 'AI-powered job application platform',
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={gabarito.style}>
      <body className={gabarito.className}>
        <Providers>
          <ClientLayoutContent>{children}</ClientLayoutContent>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
