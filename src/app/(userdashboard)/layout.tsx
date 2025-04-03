import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { DialogProvider } from '@/context/DialogContext';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import GlobalModal from '@/components/GlobalModal';
import ClientLayoutContent from './ClientLayoutContent'; // New client component

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'Talentra',
  description: 'Your next career move starts here',
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gabarito.variable}>
      <body className={gabarito.className}>
        <Providers>
          <ModalProvider>
            <SubscriptionProvider>
              <DialogProvider>
                <ClientLayoutContent>{children}</ClientLayoutContent>
                <Toaster />
              </DialogProvider>
            </SubscriptionProvider>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}