import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import '../index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui2/toaster';

const gabarito = Gabarito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mentor Match Admin',
  description: 'Admin dashboard for Mentor Match platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={gabarito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
