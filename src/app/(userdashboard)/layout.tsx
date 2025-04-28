import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import ClientLayoutContent from './ClientLayoutContent';


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
    <html lang="en">
      <body>
        <Providers>
          <ClientLayoutContent>{children}</ClientLayoutContent>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
