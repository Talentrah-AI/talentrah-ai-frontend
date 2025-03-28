import { Providers } from '@/app/providers';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { Toaster } from 'sonner';
import { Gabarito } from 'next/font/google';
import '../globals.css';

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

export default function subscriptionplansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en className={gabarito.variable}">
      <body className={gabarito.className}>
        <Providers>
          <SubscriptionProvider>
            {children}
            <Toaster />
          </SubscriptionProvider>
        </Providers>
      </body>
    </html>
  );
}
