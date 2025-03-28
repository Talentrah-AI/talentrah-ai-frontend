import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
// import './globals.css';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ModalProvider } from '@/context/ModalContext';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { Toaster } from 'sonner';
import '../globals.css';
import { Providers } from '../providers';
import GlobalModal from '@/components/GlobalModal';

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'Talentra',
  description: 'Your next career move starts here',
};

export default function userDashboardLayout({
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
            </SubscriptionProvider>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
