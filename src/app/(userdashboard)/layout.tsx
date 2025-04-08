import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
<<<<<<< HEAD
// import './globals.css';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ModalProvider } from '@/context/ModalContext';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import GlobalModal from '@/components/GlobalModal';
=======
import { ModalProvider } from '@/context/ModalContext';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { DialogProvider } from '@/context/DialogContext';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import ClientLayoutContent from './ClientLayoutContent'; // New client component
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'Talentra',
  description: 'Your next career move starts here',
};

<<<<<<< HEAD
export default function userDashboardLayout({
=======
export default function UserDashboardLayout({
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
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
<<<<<<< HEAD
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Header />
                  <main className="flex-1 pt-[64px]">
                    <div className="h-full overflow-y-auto">{children}</div>
                    <GlobalModal />
                  </main>
                </div>
              </div>
              <Toaster />
=======
              <DialogProvider>
                <ClientLayoutContent>{children}</ClientLayoutContent>
                <Toaster />
              </DialogProvider>
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
            </SubscriptionProvider>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
