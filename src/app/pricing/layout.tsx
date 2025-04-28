import { Providers } from '@/app/providers';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { Toaster } from 'sonner';
import '../globals.css';



export default function subscriptionplansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
